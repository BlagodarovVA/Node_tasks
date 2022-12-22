/*******************************************************************************************************************************
Получение данных от softclub (последний комментарий)
(GET)
*******************************************************************************************************************************/
print('Планировщик - Получение комментарий от Softclub из Jira');


_ = lib.Underscore.require();

var ss ="";
var jj = "";
var l = 0;
var author = "" ;
var author_comm = [];

//var id = "HDC-13"

var rt = new SCFile( "BapbSoftclub" );                                            //начинаем отслеживать активные обращения в Jira
if (rt.doSelect("track=\ true") == RC_SUCCESS) {
//if (rt.doSelect("id=\"" + id +"\"")==RC_SUCCESS)
	do {
		var NST = rt.key;
		var username = "*****";
		var password = "*****";
		var h = new Array(new Header("Content-type","application/json; charset=utf-8"))
					
		try {
			h.push(new Header("Authorization","Basic "+lib.BapbExternallEntity_Core.btoa(username+":"+password)))	         //пароль и логин шифрованные            //пароль и логин шифруем
			var response=doHTTPRequest("GET","https://support.softclub.by/rest/api/2/issue/"+NST+"/comment",h)

			var response = lib.JSON2.getJSONObj().parse(response);                       //парсим полученный JSON
            
			var s = response.comments.length;                                            //подсчитываем количество комментарий в Софтклубе

			ss = "";
			jj = "";
			l = 0;
			author = "";
			author_comm = [];

			var kol =  rt.comment.length;				                                          // количество комментарий в Банке

			if (s > 0) {
				var str = [];
				var jira_date = [];

				//print(s + "          количество комментарий в Софтклубе")

				for(var j = 0; j < s;  j++ ) {                                                                                  // начинаем цикл по всем комментариям в Jira
					ss  = response.comments[j].body;                                                                           // передаем по одному комментарию в переменную
					ss = ss.toString();                                                                                        // приводим на всякий к строковому типу
					ss = ss.replace(/\r?\n/g, "");                                                                             // уделяем лишние пробелы
					ss =  ss.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') ;                        					// убераем лишние переносы на новую строку

					jj = response.comments[j].updated;                                                                      // получаем дату добавления в Jira
					jj = jj.toString();                                                                                    // приводит в строковый вид
					jj = jj.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') ;                                    			// удаляем лишние пробелы

					author =  response.comments[j].updateAuthor.displayName;                          						// получаем автора комментария
					author = author.toString();                                                                            // приводим в строковый вид
					author = author.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') ;            							// удаляем лишние пробелы

					str = str.concat([ss]);                                                                               // в новый массив добавляем комментарии из Jira
					jira_date = jira_date.concat([jj]) ;                                                                 // в новый массив добавляем дату с Jira
					author_comm = author_comm.concat([author]) ;                                         				// в новый массив добавляем автора комментария
				}


				var fromFileArr = [];
				fromFileArr = rt.comment;                                                   // передаем в новый массив комментарии из Банка

				fromFileArr  = getUniqueComment(str, fromFileArr);       					//подаем на функцию массивы из Софтклуба и Банка и получаем новые от Софтклуба

				/*
				str = str.concat([fromFileArr])                               // переносим в один массив все комментарии

				fromFileArr  = _.difference(str, fromFileArr );               // отбор новых комментарий от Софтклуба которых нет в Банке
				print(fromFileArr  )
				*/


				 _.forEach(fromFileArr, function(line) {                        		// запускаем цикл по добавлению новых комментарий в Банк

					line = line.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
					line = line.replace(/\r?\n/g, "");
					var len = line.length;


					if (line != null  &&  len > 1 &&  line != "") {

						var temp = new Date();
						var temp2 = new Date();
						temp2 = temp2.getMonth() +1;
						var d = temp.getFullYear().toString() + "/"+  temp2.toString() + "/"+ temp.getDate().toString() + " "+   temp.getHours().toString() + ":"+  temp.getMinutes().toString() + ":"+ temp.getSeconds().toString();

						rt.comment.push(line);
						rt.mail_type.push("Входящее");
						rt.jira_date.push(jira_date[l]);
						rt.sync.push("t");
						rt.date_comment_servicedesk.push(d);
						rt.author.push(author_comm[l]);
						var rcc = rt.doUpdate();


						if ( rcc == RC_SUCCESS) {
							print("Комментарий успешно добавлен! " + line + "       " + rt.id);
							var email = lib.main.getEmail(rt.recipient);                                                                                                                               // получения электронной почты из пользователя банка который создал заявку в Jira
							//var templ  = "bapbSoftclub";                                                                                                                                                          //шаблон нотификации
							var p_title = "Получен новый комментарий от Софтклуба " + rt.id;

							//email = "D.Lobko@belapb.by"; 
							lib.main.sendMessage("bapbSoftclub", email, rt, p_title);                                                                                                                        //функция отправки нотификации    
							print("Получен новый комментарий от Софтклуба, отправлно " + email);
						} else {
							print("Ошибка при добавлении комментария! " + line.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')  + "       " + rt.id);
						}
					}

					l = l + 1;
				});
			}
		}
	
		catch (e) {
			print("Ошибка при получении данных по запросу: "+ e + "  " + rt.id);
			writeFile("C:\\lobko\\softclub\\getCommError.txt", null, e);
            
            // код сделает обращение неотслеживаемым, если его не существует в софтклубе и перейдет к обработке следующего
			if (response.errorMessages && response.errorMessages[0] == "ЗАПРОС НЕ СУЩЕСТВУЕТ") {
            	rt.track = false;
                let temp = new Date();
                let temp2 = new Date();
                temp2 = temp2.getMonth() +1;
                let d = temp.getFullYear().toString() + "/"+  temp2.toString() + "/"+ temp.getDate().toString() + " "+   temp.getHours().toString() + ":"+  temp.getMinutes().toString() + ":"+ temp.getSeconds().toString();
                rt.comment.push('Обращение было закрыто в Софтклубе, помечаем как неотслеживаемое');
                rt.mail_type.push("Системное");
                rt.sync.push("t");
                rt.date_comment_servicedesk.push(d);
                rt.author.push('Система');
                let rcc = rt.doUpdate();
            }
		}
	}
	while(rt.getNext() == RC_SUCCESS);
}


/********************************************************
Отбор не повторяющихся элементов массива из массива А
проверка происходит по массиву В
*********************************************************/
function getUniqueComment(a, b) {
	var result = [];
	for(var akey in a) {
		var found = false;
		for(var bkey in b) {
			if (a[akey] == b[bkey]) {
				found = true;
				continue;
				}
		}
		if (!found) {
			result.push(a[akey]);
		}
	}
	return result;
}
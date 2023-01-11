class Comment {
    constructor(text) {
        this.text = text
        this.votesQ = 0
    }

    upvote() {
        this.votesQ += 1
    }

    static mergeComments(first, second) {
        return `${first} ${second}`
    }
}

console.dir(Comment);

console.log(Comment.mergeComments('1 comment.', '2 comment.'));


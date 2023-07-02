export default class Message {
    private subject:string;
    private body:string;
    private emailAddress:string;

    constructor(subject:string, body:string, emailAddress:string){
        this.subject = subject;
        this.body = body;
        this. emailAddress = emailAddress;
    }

    public getSubject(){
        return this.subject
    }
    public getEmailAddress(){
        return this.emailAddress

    }
    public getBody(){
        return this.body
    }
}
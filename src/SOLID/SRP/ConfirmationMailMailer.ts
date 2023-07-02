
import ConfirmationMailFactory from "./ConfirmationMailMailerFactory";
import IMailer from "./IMailer";
import Message from "./Message";
import User from "./User";





export default class ConfirmationMailMailer {

    private mailer:IMailer;
    private confirmationMailFactory:ConfirmationMailFactory


    constructor(mailer:IMailer,confirmationMailFactory:ConfirmationMailFactory){
        this.mailer = mailer;
        this.confirmationMailFactory = confirmationMailFactory;
  
    }

    public sendTo(user:User){
        const message:Message = this.createMessageFor(user);
    }
    
    
    
    public sendMessage (message:Message){
        
        this.mailer.send(message);
    }
    
    public createMessageFor(user: User): Message {
       return this.confirmationMailFactory.createMessageFor(user);
    }

    




}
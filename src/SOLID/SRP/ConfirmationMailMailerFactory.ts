import ITemplateEngine from "./ITemplateEngine";
import ITranslator from "./ITranslator";
import Message from "./Message";
import User from "./User";

export default class ConfirmationMailFactory {

    private translator:ITranslator
    private templateEngine:ITemplateEngine;

    constructor(translator:ITranslator, templateEngine:ITemplateEngine){
        this.translator = translator;
        this.templateEngine = templateEngine;
    }

    public createMessageFor(user: User): Message {

        const subject:string = this.translator.translate('please confirm your email address');
        const body:string = this.templateEngine.render('confirmation-mail', {
            confirmationCode : user.getConfirmationCode()
        })
        return new Message(subject, body, user.getEmailAddress())

    }


}
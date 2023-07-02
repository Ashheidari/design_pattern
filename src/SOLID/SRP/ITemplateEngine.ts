export default interface ITemplateEngine {
    

    render (template:string, params?:object):string;
}
import express, {Express} from 'express'

export default class Application {
    
    private app:Express;
    constructor(){

        this.app = express()
    }

    public run (port:number):void
    {
        this.app.listen(port,()=>{
            console.log(`server is running on port ${port}`)
        })
    }
}
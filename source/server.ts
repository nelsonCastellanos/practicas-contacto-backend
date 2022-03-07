import express, { Application } from 'express'
import routes from './api/routes'



class Server {
    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
    }

    public config():void{
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}))
    }

    public routes():void {
        this.app.use('/api/v1', routes);
    }

    public start():void{
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server running`)
        });
    }
}
const server = new Server();
server.start();
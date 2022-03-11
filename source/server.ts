import express, { Application } from 'express'
import routes from './api/routes'
import cors from 'cors';

class Server {
    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    public config():void{
        this.app.set("port", process.env.PORT || 3000);
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}))
        this.app.use(cors());
    }

    public routes():void {
        this.app.use('/api/v1', routes);
    }

    public start():void{
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server running`)
        }).on('error', function(err) { console.error(err)});;
    }
}
const server = new Server();
server.start();
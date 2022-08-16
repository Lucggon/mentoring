import express, { Request, Response } from 'express';
import * as http from 'http';
import { json, urlencoded } from 'body-parser';
import helmet from 'helmet';
import compress from 'compression';
import Router from 'express-promise-router';
import errorHandler from 'errorhandler';
import httpStatus from 'http-status';
import { registerRoutes } from './routes';

export class Server{
    private express!: express.Express;
    private port!: string;
    private httpServer?: http.Server;

    private constructor() {

       
    }
    public static createServer  = async (port: string) => {
        const server = new Server();
        server.port = port;
        server.express = express();
        server.express.use(json());
        server.express.use(urlencoded({extended: true}));
        server.express.use(helmet.xssFilter());
        server.express.use(helmet.noSniff());
        server.express.use(helmet.hidePoweredBy());
        server.express.use(helmet.frameguard({action: 'deny'}));
        server.express.use(compress());
        const router = Router();
        router.use(errorHandler());
        server.express.use(router);
        await registerRoutes(router);

        router.use((err: Error, req: Request, res: Response, next: Function) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
        });
        return server;
    }

    async listen(): Promise<void> {
        return new Promise(resolve => {
            this.httpServer = this.express.listen(this.port,  () => {
                console.log(  `  Mentoring Backend App 
                is running at http://localhost:${this.port} in ${this.express.get('env')} mode`);
                console.log('Press CTRL-C to stop \n');
                resolve();
            });
        });
    }
    getHTTPServer() {
        return this.httpServer;
    }
    async stop(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.httpServer) {
                this.httpServer.closeAllConnections;
                return resolve();
            }
        });
    }

}

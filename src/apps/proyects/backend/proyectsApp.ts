import { Server } from './server';

export class ProyectsApp{
    server?: Server;
    
    async start(): Promise<void> {
        const port = process.env.PORT || '5000';
        this.server = await Server.createServer(port);
        return this.server.listen();

    }
    get httpServer() {
        return this.server?.getHTTPServer();
    }
    async stop() {
        return this.server?.stop();
    }

}

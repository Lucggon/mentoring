import {Router} from 'express';
import glob from 'glob';
import { Register } from './route.model';

export async function registerRoutes(router: Router){

    const routes = glob.sync((__dirname.replace(/\\/g, '/')) + '/**/*.route.*');
    await Promise.all(routes.map(route =>  register(route, router)));
}

async function register(routePath: string, router: Router) {
    const route: Register = require(routePath);
    await route.register(router);
    console.log('ROUTER REGISTER')
}

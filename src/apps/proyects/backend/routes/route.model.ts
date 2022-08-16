import { Router } from 'express';


export interface Register {
    register(router: Router): Promise<void>
}
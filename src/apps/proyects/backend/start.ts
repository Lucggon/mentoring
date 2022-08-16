import { ProyectsApp } from './proyectsApp';

try {
    new ProyectsApp().start();
} catch (e) {
    console.log(e);
    process.exit(1);
}

process.on('uncaughtException' , (err, origin) => {
    console.log('uncaughtException', err, origin);
    process.exit(1);
});


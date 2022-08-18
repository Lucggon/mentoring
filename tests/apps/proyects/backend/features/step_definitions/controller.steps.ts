import assert from 'assert';
import { AfterAll, BeforeAll, Given, Then } from '@cucumber/cucumber';
import request from 'supertest';
import { ProyectsApp } from '../../../../../../src/apps/proyects/backend/proyectsApp';

let _request: request.Test
let application: ProyectsApp;
let _response: request.Response;

Given('I send a GET request to {string}', (router: string) => {
    _request = request(application.httpServer).get(router);
    
});

Then('The response status code should be {int}', async (status: number)=>{
    _response = await _request.expect(status);

});

Given('I send a PUT request to {string} with body:',(route:string, body: string) => {
    _request = request(application.httpServer).put(route).send(JSON.parse(body));
});

Then('The response should be empty', () => {
    assert.deepStrictEqual(_response.body, {});
})
BeforeAll(async () => {
    application = new ProyectsApp();
    await application.start();
  });
AfterAll(async () => {
    await application.stop();
})
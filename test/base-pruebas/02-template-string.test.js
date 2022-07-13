import { getSaludo } from '../../src/base-pruebas/02-template-string';

describe('Testing 02-template-string', () => { 
    test('getSaludo debe retornar saludo', () => {
        const nombre = 'Julio';
        const saludo = getSaludo(nombre);

        expect(saludo).toBe(`Hola ${ nombre }`);
    });
})
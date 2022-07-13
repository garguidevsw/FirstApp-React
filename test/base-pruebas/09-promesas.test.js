import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";
import heroes from '../data/heroes';

describe('Testing 09-promesas', () => {

    test('getHeroeByIdAsync obtiene heroe con then', (done) => {
        const id = 1;
        const heroeTest = heroes.find( h => h.id === id );

        getHeroeByIdAsync(id).then( heroe => {
            expect(heroe).toEqual(heroeTest);

            done();
        });

    });

    test('getHeroeByIdAsync obtiene error con then', (done) => {
        const id = 100;

        getHeroeByIdAsync(id).catch( heroe => {
            expect(heroe).toBe('No se pudo encontrar el héroe');

            done();
        });

    });

    test('getHeroeByIdAsync obtiene heroe', async () => {
        const id = 1;
        const heroeTest = heroes.find( h => h.id === id );

        const heroe = await getHeroeByIdAsync(id);

        expect(heroe).toEqual(heroeTest);
    });

    // test('getHeroeByIdAsync no obtiene heroe', async () => {
    //     const id = 100;
    //     //const heroeTest = heroes.find( h => h.id === id );

    //     const heroe = await getHeroeByIdAsync(id);

    //     expect(heroe).toBe('No se pudo encontrar el héroe');
    // }) 
});
import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";
import heroes from '../data/heroes';

describe('Testing 08-imp-exp', () => {
    test('getHeroesById obtener heroes por id', () => {
        const id = 1;

        const heroeTest = heroes.find((h) => h.id === id);

        const heroe = getHeroeById(1);

        expect(heroe).toEqual(heroeTest);
    });

    test('getHeroeByOwner obtener hereo por owner', () => {
        const owner = 'Marvel';

        const heroeTest = heroes.filter((h) => h.owner === owner);

        const heroeArr = getHeroesByOwner(owner);

        expect(heroeArr).toEqual(heroeTest);
        expect(heroeArr.length).toBe(2);

    });

    test('getHeroeByOwner obtener hereo de DC', () => {
        const owner = 'DC';

        const heroeTest = heroes.filter((h) => h.owner === owner);

        const heroeArr = getHeroesByOwner(owner);

        expect(heroeArr).toEqual(heroeTest);
        expect(heroeArr.length).toBe(3);

    });
})
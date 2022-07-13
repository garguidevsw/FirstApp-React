import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';

describe('Testing 05-funciones', () => { 
    test('getUser obteniendo usuario', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const user = getUser();

        expect(user).toEqual(testUser);
    });

    test('getUsuarioActivo obtiene el usuario activo', () => {
        const nombre = 'Julio';
       
        const user = getUsuarioActivo(nombre);

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    })
})
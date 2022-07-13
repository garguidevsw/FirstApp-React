import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';
describe('Testing 07-deses-arr', () => {
    test('Regresa un arreglo', () => {
        const arr = retornaArreglo();

        const arrTest = [ 'ABC', 123 ];

        expect(arr.length).toBe(2);
        expect(arr).toContain('ABC');
        expect(arr).toContain(123);
        expect( typeof arr[0] ).toBe('string');
        expect( typeof arr[1] ).toBe('number');

        expect( arr[0] ).toEqual( expect.any(String) );
    })
})
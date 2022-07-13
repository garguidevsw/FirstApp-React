import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Testing 11-async-await', () => {
    test('getImagen debe regresar una imagen', async () => {
         const imagen = await getImagen();
            console.log(imagen);
         expect(typeof imagen).toBe('string');
    });    
});
import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () =>{
    
    test('Prueba en el método getSaludo', () => {
        const nombre = 'Alejandro'

        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola ' + nombre);
    })

    // Debe retornar Hola Carlos
    test('Prueba en el método getSaludo por defecto', () => {
        const nombre = 'Alejandro'

        const saludo = getSaludo(  );

        expect( saludo ).toBe( 'Hola Carlos');
    })

});
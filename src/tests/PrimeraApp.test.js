import React from 'react'
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';

import PrimeraApp from "../PrimeraApp";

describe('Pruebas en <PrimerApp />', () => {
    
    test('Debe mostrar Hola, mundo', () => {
       
        const saludo = "Hola, mundo";

        const wrapper = shallow( <PrimeraApp saludo={ saludo } />);
     
        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe mostrar el subtitulo enviado por props', () => {
       
        const saludo = "Hola, mundo";
        const subtitulo = "Soy un subtitulo"
        const wrapper = shallow( 
                <PrimeraApp 
                    saludo={ saludo }
                    subtitulo={ subtitulo } 
                />
        );

        const textoParrafo = wrapper.find('p').text();
        console.log(textoParrafo);

        expect ( textoParrafo ).toBe( subtitulo );
    })
    
});
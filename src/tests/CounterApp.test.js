import React from 'react';
import { shallow } from "enzyme";
import CounterApp from '../CounterApp';



describe('Pruebas en el <CounterApp />', () => {
    let wrapper = shallow( <CounterApp />);;

    beforeEach( () => {
        wrapper = shallow( <CounterApp />);
    })

    test('debe mostrar el componente correctamente', () => {
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe mostrar el valor por defecto 100', () => {
        const wrapper = shallow( <CounterApp value={ 100 }/>);
        
        const counterText = wrapper.find('h2').text().trim();
        //console.log(counterText);
        
        expect( counterText ).toBe('100');

    });

    test('Debe incrementar con el botón +1', () => {
        wrapper.find('button').at(0).simulate('click');
        let counterText = wrapper.find('h2').text();
        console.log(counterText);
        
        expect( counterText ).toBe('11');
    })
    
    test('Debe decrementar con el botón -1', () => {
        wrapper.find('button').at(2).simulate('click');
        let counterText = wrapper.find('h2').text();
        console.log(counterText);
        
        expect( counterText ).toBe('9');
    })

    test('Debe resetear', () => {
        const wrapper = shallow( <CounterApp value={ 105 }/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        let counterText = wrapper.find('h2').text();
        console.log(counterText);

        expect( counterText ).toBe('105');
    })
    

});
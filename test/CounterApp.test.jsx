import { render, screen, fireEvent } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp";

describe('pruebas en CounterApp', () => {

    const value = 100; 

    test('debe de hacer match con el snapshot', () => {

        const { container } = render(
            <CounterApp value={ value } />
        );

        expect( container ).toMatchSnapshot();
    });

    test('debe mostrar el valor inicial de 100', () => {
        render(
            <CounterApp value={ value } />
        );

        expect( screen.getByTestId('test-counter-ini').innerHTML ).toBe(value.toString());
        
    });

    test('debe incrementar con el boton +1', () => {
        render(
            <CounterApp value={ value } />
        );

        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );

        expect( screen.getByTestId('test-counter-ini').innerHTML ).toContain('102');

    });

    test('debe incrementar con el boton -1', () => {
        render(
            <CounterApp value={ value } />
        );

        fireEvent.click( screen.getByText('-1') );

        expect( screen.getByTestId('test-counter-ini').innerHTML ).toContain('99');

    });

    test('debe incrementar con el boton Reset', () => {
        render(
            <CounterApp value={ value } />
        );

        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        // fireEvent.click( screen.getByText('Reset') );

        fireEvent.click( screen.getByRole('button', { name: 'btn-reset'}) );


        expect( screen.getByTestId('test-counter-ini').innerHTML ).toContain('100');

    });
});
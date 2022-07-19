import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en FirstApp2', () => {

    const title = 'Hola, soy Goku!';
    const subtitle = 'Soy un subtitulo';

    test('debe de hacer match con el snapshot', () => {
        const { container } = render( <FirstApp title={ title } /> );
        expect( container ).toMatchSnapshot();
    });

    test('debe mostrar el title Hola, soy Goku!', () => {
        
        render( <FirstApp title={ title } /> );
        expect( screen.getByText(title) ).toBeTruthy();
        // screen.debug();

    });

    test('debe mostrar el title en un h1', () => {
        
        render( <FirstApp title={ title } /> );
        expect( screen.getByRole( 'heading', { level: 1 } ).innerHTML ).toContain( title );

    });

    test('debe de mostrar el subtitle enviado por props', () => {

        render( <FirstApp title={ title } subtitle={ subtitle } /> );
        expect( screen.getAllByText(subtitle).length ).toBe(2);

    })
})
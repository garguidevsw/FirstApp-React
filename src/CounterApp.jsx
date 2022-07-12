import { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const addHandle = (event) => {
        setCounter( counter + 1 );
        // setCounter( (c) => c + 1 );
    }

    const subHandle = (event) => {
        setCounter( counter - 1 );
    }

    const resetHandle = (event) => {
        setCounter( value );
    }
    
  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={ subHandle }>-1</button>
        <button onClick={ addHandle }>+1</button>
        <button onClick={ resetHandle }>Reset</button>
    </>
  )
}


CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0
}
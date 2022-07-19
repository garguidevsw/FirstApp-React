import React from 'react';
import ReactDOM from 'react-dom/client';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './styles.css';

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        {/* <FirstApp title='Hola, soy Goku!' subtitle="Este es el subtitulo..." /> */}
        {/* <FirstApp title='Hola, soy Goku!' /> */}

        <CounterApp value={ 100 } />
    </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom';
import {createGlobalStyle} from 'styled-components';
import Widget from './components/Widget.jsx';

const GlobalStyle = createGlobalStyle`
    *,*::before,*::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }
`;

document.addEventListener('DOMContentLoaded',
function(){
    ReactDOM.render(
        <div>
            <GlobalStyle/>
            <Widget/>
        </div>,
        document.getElementById('app')
    );
});
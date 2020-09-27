import React from 'react';
import { render } from 'react-dom'
import App from './App';
import GlobalState from './component/GlobalState';

render(
< GlobalState >
    <App />
</GlobalState>
    , document.getElementById("root"));
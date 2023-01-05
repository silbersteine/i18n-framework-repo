import React from 'react';
// I removed the /client from react-dom. Having done this the browser can now display my app.
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Wrapper from "./components/Wrapper";


ReactDOM.render(
    <Wrapper>
        <App date={Date.now()} />
    </Wrapper>,
    document.getElementById('root'));
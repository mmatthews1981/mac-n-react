import React from 'react';
import './App.css';
import Store from './myStore'
import Clock from './components/clock'
import NotClock from './components/notclock'

const App = () => (
    <Store.Container>
        <Clock />
        <NotClock />
    </Store.Container>
);


export default App;

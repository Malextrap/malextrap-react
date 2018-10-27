import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';

export default () =>
    <BrowserRouter>
        <Route path={"/"} component={Home} />
    </BrowserRouter>
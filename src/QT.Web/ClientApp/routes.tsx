import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './components/Layout/Index';
import Home from './components/Home';

export const routes = <Layout>
    <Route exact path='/' component={ Home } />
    <Route path='/counter' component={ Home } />
    <Route path='/fetchdata/:startDateIndex?' component={ Home } />
</Layout>;

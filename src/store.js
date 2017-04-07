import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import counterApp from './counter/reducers';

const store = createStore(counterApp);

export default store;
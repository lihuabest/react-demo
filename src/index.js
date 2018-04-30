import React from 'react';
import ReactDOM from 'react-dom';

import app from './app';

ReactDOM.render(app, document.getElementById('app'));

// hot reload
if (module && module.hot) {
    module.hot.accept();
}
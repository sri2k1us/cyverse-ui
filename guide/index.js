import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import { createHistory } from 'history';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import cyverseTheme from 'cyverse-ui/styles/cyverseTheme';

// These two lines are necessary to interop with material-ui. It's supposed to
// be temporary. When the installation no longer mentions it, I suppose these
// can be removed.
// http://www.material-ui.com/#/get-started/installation
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import routes from './routes';
import { setup } from './setup';

const history = useRouterHistory(createHistory)({
    basename: __BASENAME__
});

setup();

let muiTheme = getMuiTheme(cyverseTheme);

ReactDOM.render(
    <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={history}>
            {routes}
        </Router>
    </MuiThemeProvider>,
    document.getElementById('app')
);

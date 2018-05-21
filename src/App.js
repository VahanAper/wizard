import React from 'react';
import { Provider } from 'react-redux';

import Wizard from './components/wizard';

import store from './store';

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Wizard />
            </Provider>
        );
    }
}

export default App;

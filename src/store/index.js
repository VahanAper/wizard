import {
    createStore,
} from 'redux';

import reducers from '../reducers';

const store = createStore(
    reducers,
    // Default state is empty object
    {},
);

export default store;
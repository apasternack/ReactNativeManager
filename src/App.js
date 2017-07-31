import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDtIe9zRlAPDYZDHVIBK-hkhrKxZCiZ45A',
            authDomain: 'manager-dc46a.firebaseapp.com',
            databaseURL: 'https://manager-dc46a.firebaseio.com',
            projectId: 'manager-dc46a',
            storageBucket: 'manager-dc46a.appspot.com',
            messagingSenderId: '166052078917'
        };
        firebase.initializeApp(config);
    }
    
    
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        
        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}

export default App;

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;

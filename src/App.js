import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

//life cycle method runs before app is rendered
    componentWillMount () {
        firebase.initializeApp ({
            
            apiKey: "AIzaSyBLNoJR524alAfrZPQ1RsIo0hkdUijMPvA",
            authDomain: "auth-8e375.firebaseapp.com",
            databaseURL: "https://auth-8e375.firebaseio.com",
            projectId: "auth-8e375",
            storageBucket: "auth-8e375.appspot.com",
            messagingSenderId: "989364508895"
              
        });
    }

    render () {
        return (
            <View>
                <Header headerText="Authentication"/>
                <LoginForm />
            </View>
        );
    } 
}

export default App;

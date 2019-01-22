import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null };

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

        firebase.auth().onAuthStateChanged((user) => {

            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false});
            }
        });
    }

    renderContent () {

        switch (this.state.loggedIn) {
            case true:
                return <Button>Log Out</Button>;

            case false:
                return <LoginForm />;

            default:
                return <Spinner size="large" />;
        }
    }

    render () {
        return (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    } 
}

export default App;

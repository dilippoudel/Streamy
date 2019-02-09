import React, { Component } from 'react';
import {connect} from 'react-redux';
import { signIn, signOut } from '../actions/index';
class GoogleAuth extends Component {
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'644196156524-7fu2slqe0hmjmjji14lt2cbckkvl546u.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = isSignedIn => {
        //In google auth, we can grab the id of user who's signed i by this method:
        //gapi.auth2.getAuthInstance().currentUser.get().getId()

        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId());
        }
        else {
            this.props.signOut();
        }
    }
    // these two helper method call the gapi instances to either sign in or sign out.
    onSignInClick = () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }
    //This helper method return the div element of button according to the state of authReducer.
    // if the state in authReduce is true, it gives the signOut button and viceversa.
    renderAuthButton(){
        if(this.props.isSignedIn){
            return(
            <button onClick = {this.onSignOutClick} className = "ui red google button"> 
                <i className = "google icon"/>
                Sign Out
            </button>
            )
        }
        else {
            return (
                <button onClick = {this.onSignInClick} className = "ui primary google button"> 
                <i className = "google icon"/>
                Sign In with Google
            </button>
            )
        }
    }
    render() {
        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn};
}
// connect function takes two argument. In the first arfument, there are two objects mapStateToProps and the action creator.
//we need to import the action creator to change the state in reducer store.
export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
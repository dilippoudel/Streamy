import React, { Component } from 'react';

class GoogleAuth extends Component {
    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId:'644196156524-7fu2slqe0hmjmjji14lt2cbckkvl546u.apps.googleusercontent.com',
                scope: 'email'
            })
        });
    }
    render() {
        return (
            <div>
                Google Auth
            </div>
        );
    }
}

export default GoogleAuth;
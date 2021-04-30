import React from 'react';
import firebase from '../firebase';
import { Button } from 'reactstrap';

class Logout extends React.Component {

    handleLogout = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <div className="container">
                <Button onClick={this.handleLogout}>ログアウト</Button>
            </div>
        );
    }
}

export default Logout;
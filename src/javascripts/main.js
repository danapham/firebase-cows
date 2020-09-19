import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';
import authData from './helpers/data/authData';
import auth from './components/auth/auth';
// eslint-disable-next-line import/no-named-as-default-member
import myNavBar from './components/myNavBar/myNavBar';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavBar.logoutEvent();
};

init();

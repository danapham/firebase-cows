import firebase from 'firebase/app';
import 'firebase/auth';
// eslint-disable-next-line import/no-named-as-default-member
import pasture from '../../components/pasture/pasture';
import userData from './userData';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // person is logged in
      userData.getUser(user);
      $('#auth').addClass('hide');
      $('#pasture').removeClass('hide');
      $('#navbar-logout-button').removeClass('hide');
      pasture.buildCows();
    } else {
      $('#navbar-logout-button').addClass('hide');
      $('#auth').removeClass('hide');
      $('#pasture').addClass('hide');
    }
  });
};

export default { checkLoginStatus };

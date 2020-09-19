import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseURL = apiKeys.firebaseKeys.databaseURL;

const getUser = (userObj) => {
  axios.get(`${baseURL}/farmers.json?orderBy="uid"&equalTo="${userObj.uid}"`)
    .then((resp) => {
      if (Object.values(resp.data).length === 0) {
        // Post Object to Farmers
        // {
        //   image:
        //   uid:
        //   displayName:
        //   email:
        //   lastSignInTime:
        // }

        // use axios.post
        // pass it the url${baseURL}/farmers.json
        // past it an object
      } else {
        console.warn('User Exists');
      }
    });
};

export default { getUser };

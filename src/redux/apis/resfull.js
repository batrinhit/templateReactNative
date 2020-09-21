import axios from 'axios';
import {
  URL_DOMAIN,
  TIME_REQUEST,
} from '../../utils/configApp';
import qs from 'qs';

var configBasic = {
  timeout: TIME_REQUEST,
  'Content-Type': 'application/x-www-form-urlencoded',
  Accept: 'application/json',
};

const linkRequest = URL_DOMAIN + '/api';

export const loginAPI = (user, pass) => {
  var data = qs.stringify({
    user,
    pass
  });

  const requestConfig = {
    headers: {...configBasic},
    method: 'POST',
    url: linkRequest,
    data: data,
  };

  return new Promise((resolve, reject) => {
    axios(requestConfig)
      .then(function (response) {
        if (response && response.data && response.data.status === 'success') {
          return resolve(response);
        } else {
          return reject();
        }
      })
      .catch(function (error) {
        console.log('err', error);
        return reject(error);
      });
  });
};

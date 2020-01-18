import {setListener, pushData, initialize} from './firebase';
import {auth} from 'firebase';

export const initApi = () => initialize();
export const getMessages = (updaterFn, uidS, uidR) =>
  setListener('/messages/' + uidS + '/' + uidR, updaterFn);
export const getData = updaterFn =>
  setListener('/users/' + auth().currentUser.uid, updaterFn);
export const postMessage = (message, uidS, uidR) => {
  if (message) {
    pushData('/messages/' + uidS + '/' + uidR, {
      incoming: false,
      message,
    });
    pushData('/messages/' + uidR + '/' + uidS, {
      incoming: true,
      message,
    });
  }
};

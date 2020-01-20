import {setListener, pushData, initialize} from './firebase';

export const initApi = () => initialize();
export const getMessages = (updaterFn, uidS, uidR) =>
  setListener('/messages/' + uidS + '/' + uidR, updaterFn);
export const getData = (updaterFn, endpoint) =>
  setListener(endpoint, updaterFn);
export const postMessage = (message, uidS, uidR) => {
  const month = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  if (message) {
    pushData('/messages/' + uidS + '/' + uidR, {
      incoming: false,
      message,
      date: Date.now(),
      day:
        new Date().getDate() +
        ' ' +
        month[new Date().getMonth()] +
        ' ' +
        new Date().getFullYear(),
      uid: uidR,
    });
    pushData('/messages/' + uidR + '/' + uidS, {
      incoming: true,
      message,
      date: Date.now(),
      day:
        new Date().getDate() +
        ' ' +
        month[new Date().getMonth()] +
        ' ' +
        new Date().getFullYear(),
      uid: uidS,
    });
  }
};

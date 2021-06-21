import store from '../redux/store';

export const Logger = (store) => {
  return (next) => (action) => {
    console.log('This dispatch = ', action);
    return next(action)
  }
}

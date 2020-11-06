
import axios from 'axios';
import useAuth from './useAuth';

const { REACT_APP_API_BASE_URL } = process.env;
console.log(REACT_APP_API_BASE_URL);

const instance = axios.create({
  baseURL: REACT_APP_API_BASE_URL,
});

useAuth(instance);

export default instance;


import axios from 'axios';
import useAuth from './useAuth';

const { REACT_APP_API_BASE_URL } = process.env;

const instance = axios.create({
  baseURL: REACT_APP_API_BASE_URL || 'http://localhost:7001',
});

useAuth(instance);

export default instance;

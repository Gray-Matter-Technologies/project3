const AUTH_TOKEN = 'AUTH_TOKEN';


const appendAuthTokenToRequest = (config) => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  
  if (authToken) {
    const Authstring = 'Bearer'+ ' ' + authToken
    config.headers = {
      ...config.headers,
      'Authorization': Authstring
    };
  }

  return config;
};

const useAuth = (instance) => {
  instance.interceptors.request.use(appendAuthTokenToRequest);
};

export default useAuth;
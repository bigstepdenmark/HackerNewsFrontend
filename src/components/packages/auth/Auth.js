export default function (Vue) {

  let authenticatedUser = {};

  Vue.auth = {

    /*
    |--------------------------------------------------------------------------
    | Set Token
    |--------------------------------------------------------------------------
    | Save the token and expire_in values in localStorage.
    */
    setToken(token, expiration) {
      localStorage.setItem('token', token);
      localStorage.setItem('expiration', expiration);
    },

    /*
    |--------------------------------------------------------------------------
    | Get Token
    |--------------------------------------------------------------------------
    | Return token if token exists in localStorage and if the token expiration is less then
    | current date, otherwise return null.
    */
    getToken() {
      var token = localStorage.getItem('token');
      var expiration = localStorage.getItem('expiration');

      if (!token || !expiration)
        return null;

      if (Date.now() > parseInt(expiration)) {
        this.destroyToken();
        return null;
      }
      else {
        return token;
      }

    },

    /*
    |--------------------------------------------------------------------------
    | Destroy Token
    |--------------------------------------------------------------------------
    | Destroy the token and expiration in localStorage.
    */
    destroyToken() {
      localStorage.removeItem('token');
      localStorage.removeItem('expiration');
    },

    /*
    |--------------------------------------------------------------------------
    | Is User Authenticated
    |--------------------------------------------------------------------------
    | Check if token exists in localStorage.
    */
    isAuthenticated() {
      if (this.getToken()) {
        return true
      }
      else {
        return false
      }
    },

    setAuthenticatedUser(data) {
      authenticatedUser = data;
    },

    getAuthenticatedUser() {
      return authenticatedUser;
    },

    getAuthRequestData(username, password) {
      return {
        grant_type: 'password',
        client_id: 2,
        client_secret: 'lvfJWIF5qaMAtWQnVWdw5qv4p0kxqs6G0e86lBhy',
        redirect_uri: 'http://localhost:8080',
        username: username,
        password: password,
        scope: ''
      }
    }
  }

  // Share functions between all components.
  Object.defineProperties(Vue.prototype, {
    $auth: {
      get() {
        return Vue.auth
      }
    }
  });

}

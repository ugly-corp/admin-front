import { HttpError } from "react-admin";
import data from "../users.json";


export const authProvider = {
  async login({ username, password })  {
    const request = new Request(import.meta.env.VITE_SIMPLE_REST_URL + import.meta.env.VITE_URL_PATH + '/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email: username, password }),
        headers: new Headers({ 'Content-Type': 'application/json' }),
    });
    let response;
    try {
        response = await fetch(request);
    } catch (_error) {
        throw new Error('Network error');
    }
    if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
    }
    const auth = await response.json();
    localStorage.setItem('token', JSON.stringify(auth.data.token));
    localStorage.setItem('user', JSON.stringify(auth.data.user));
},
  logout: () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    return Promise.resolve();
  },
  checkError: () => Promise.resolve(),
  checkAuth: () =>
    localStorage.getItem("user") ? Promise.resolve() : Promise.reject(),
  getPermissions: () => {
    return Promise.resolve(undefined);
  },
  getIdentity: () => {
    const persistedUser = localStorage.getItem("user");
    const user = persistedUser ? JSON.parse(persistedUser) : null;

    return Promise.resolve(user);
  },
};

export default authProvider;

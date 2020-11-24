import jwtDecode from 'jwt-decode';
import http from './httpService';
import config from '../config.json';

const authAPI = config.apiEndpoint + 'auth';
const tokenKey = 'token';

export async function login(email, password) {
    const { data: jwt } = await http.post(authAPI, { email, password });
    localStorage.setItem(tokenKey, jwt);
}
export function logout() {
    localStorage.removeItem(tokenKey);
}
export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey);
       // console.log(jwtDecode(jwt));
        return jwtDecode(jwt);
    } catch (ex) {
        return null;
    }
}
export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
}
export default {
    login,
    logout,
    getCurrentUser,
    loginWithJwt
};

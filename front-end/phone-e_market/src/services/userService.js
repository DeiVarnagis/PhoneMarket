import http from './httpService';
import config from '../config.json';

const userAPI = config.apiEndpoint + 'users';

export function register(user) {
    return http.post(userAPI, {
        name: user.username,
        email: user.email,
        password: user.password
    });
}

import http from './httpService';
import config from '../config.json';

const phoneAPI = config.apiEndpoint + 'phones';
const specificPhoneAPI = `${phoneAPI}/`;

export function getAllPhones() {
    return http.get(phoneAPI);
}
export function getPhone(phoneID) {
    return http.get(specificPhoneAPI + phoneID);
}
export function createPhone(formData) {
    return http.post(specificPhoneAPI, formData, {
        'Content-Type': 'multipart/form-data'
    });
}
export function updatePhone(phone, formdata, header) {
    const id = phone._id;
    console.log('updatePhone phone id - ', specificPhoneAPI + id);
    try {
        http.put(specificPhoneAPI + id, formdata, header);
    } catch (ex) {
        console.log('error!', ex);
    }
}
export default {
    getAllPhones,
    getPhone,
    updatePhone
};

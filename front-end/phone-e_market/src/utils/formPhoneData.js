var FormData = require('form-data');
var formData = new FormData();

export function formPhoneData(phone) {
    formData.append('_id', phone._id);
    formData.append('model', phone.model);
    formData.append('brand', phone.brand);
    formData.append('screenSize', phone.screenSize);
    formData.append('RAMsize', phone.RAMsize);
    formData.append('state', phone.state);
    formData.append('storageSize', phone.storageSize);
    formData.append('color', phone.color);
    formData.append('phoneNumber', phone.phoneNumber);
    formData.append('price', phone.price);
    phone.images.forEach((image) => {
        formData.append('images', image);
    });
    return formData;
}
export default formData;

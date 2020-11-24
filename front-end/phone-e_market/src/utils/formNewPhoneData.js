var FormData = require('form-data');
var formData = new FormData();

export function formNewPhoneData(phone) {
    console.log('phone own id', phone.creatorID);
    formData.append('model', phone.model);
    formData.append('brand', phone.brand);
    formData.append('screenSize', phone.screenSize);
    formData.append('RAMsize', phone.RAMsize);
    formData.append('state', phone.state);
    formData.append('storageSize', phone.storageSize);
    formData.append('phoneNumber', phone.phoneNumber);
    formData.append('color', phone.color);
    formData.append('price', phone.price);
    phone.images.forEach((image) => {
        formData.append('images', image);
    });
    formData.append('creatorID', phone.creatorID);
    return formData;
}
export default formNewPhoneData;

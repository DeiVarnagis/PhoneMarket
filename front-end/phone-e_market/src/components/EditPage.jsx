import React, { Fragment, useState, useEffect } from 'react';
import Joi from 'joi-browser';
import EditForm from './../common/editForm';
import Upload from '../common/upload';
import Line from '../common/line';
import { getPhone, updatePhone } from '../services/phoneServices';
import CircularIndeterminate from '../common/CircularIndeterminate';
import SaveButton from '../common/saveButton';
import { formPhoneData } from '../utils/formPhoneData';
import SaveDialog from './../common/dialog';

function EditPage(props) {
    const { id } = props.match.params;
    const [phone, setPhone] = useState({});
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState({});
    const [imagePaths, setImagePaths] = useState([]);
    const [open, setOpen] = useState(false);
    var text =
        "If you didn't upload pictures your phone will be presented with default image and in the detail page, it won't have any pictures.";
    var FormData = require('form-data');
    var formData = new FormData();

    var schema = {
        _id: Joi.string(),
        model: Joi.string().min(2).required(),
        brand: Joi.string().required(),
        screenSize: Joi.number().positive().required().min(3),
        RAMsize: Joi.number().positive().required().min(1),
        state: Joi.string().required(),
        storageSize: Joi.number().positive().required().min(16),
        color: Joi.string().required(),
        phoneNumber: Joi.string().min(7).max(17).required(),
        price: Joi.number().positive().required(),
        images: Joi.array().items(
            Joi.object({
                path: Joi.string()
            })
        ),
        creatorID: Joi.string()
    };

    useEffect(() => {
        async function getPhones() {
            const { data } = await getPhone(id);
            data.images = [];
            setPhone(data);
            setLoading(false);
        }
        getPhones();
    }, [id]);

    if (loading) {
        return <CircularIndeterminate />;
    } else {
        function validateProperty({ name, value }) {
            const obj = { [name]: value };
            const definedSchema = { [name]: schema[name] };
            const { error } = Joi.validate(obj, definedSchema);
            return error ? error.details[0].message : null;
        }
        function validate() {
            const options = { abortEarly: false };
            const { error } = Joi.validate(phone, schema, options);
            if (!error) return null;

            const currentERRORS = {};
            for (let item of error.details)
                currentERRORS[item.path[0]] = item.message;
            return currentERRORS;
        }

        function handleInputChange(e) {
            const { target: input } = e;
            const currentErrors = { ...errors };
            const errorMessage = validateProperty(input);
            if (errorMessage) currentErrors[input.name] = errorMessage;
            else delete currentErrors[input.name];

            const data = { ...phone };
            data[input.name] = input.value;
            setErrors(currentErrors);
            setPhone(data);
        }
        function onChangeHandler(e) {
            const { files: images } = e.target;
            const paths = [];
            const uploadImages = [];
            for (const file of images) {
                uploadImages.push(file);
                const imgPath = URL.createObjectURL(file);
                paths.push(imgPath);
            }
            const updatedPhone = { ...phone };
            updatedPhone.images = uploadImages;
            setPhone(updatedPhone);
            setImagePaths(paths);
        }
        function handleSave() {
            handleClickOpen();
        }
        const handleClickOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };

        function handleUpdateClose() {
            const currentErrors = validate();
            setErrors(currentErrors || {});
            if (currentErrors) {
                setOpen(false);
                return;
            }
            formData = formPhoneData(phone);
            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            };
            async function handlePhoneUpdate() {
                await updatePhone(phone, formData, config);
            }
            handlePhoneUpdate();
            props.history.goBack();
            setOpen(false);
        }

        return (
            <Fragment>
                <EditForm
                    phone={phone}
                    onChange={handleInputChange}
                    errors={errors}
                />
                <div style={{ padding: '8px' }}>
                    <Line color="#ffcd38" />
                </div>

                <Upload onChange={onChangeHandler} imagePaths={imagePaths} />
                <SaveDialog
                    handleClose={handleClose}
                    open={open}
                    title="Without an upload - NO IMAGES!"
                    text={text}
                    handleClickSave={handleUpdateClose}
                />
                <SaveButton onClick={handleSave} />
            </Fragment>
        );
    }
}

export default EditPage;

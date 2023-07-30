import * as yup from 'yup';

export const loginFormValidationSchema = yup.object().shape({
	email: yup.string().email().required(),
	password: yup.string().min(6)
});
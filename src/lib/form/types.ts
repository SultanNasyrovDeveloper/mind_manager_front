import type {
	FormikConfig,
	FormikValues as FormValues,
	FormikFormProps as FormProps,
	FormikProps as FormState
} from 'formik';
import type {
	DefaultOptionType as OptionProps
} from 'antd/lib/select';
import { FormItemProps } from 'formik-antd';

export interface FormFieldProps<ControlProps = Record<string, unknown>>
	extends Omit<FormItemProps, 'children'> {
	controlProps?: ControlProps;
}

export interface FormManagerProps<DataType>
	extends FormikConfig<DataType> {
	formProps?: FormProps;
}

export { FormProps, FormValues, OptionProps, FormState };
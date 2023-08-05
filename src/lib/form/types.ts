import type {
	FormikConfig,
	FormikValues as FormValues,
	FormikProps as FormProps,
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
	formProps?: FormProps<DataType>;
}

export { FormProps, FormValues, OptionProps };
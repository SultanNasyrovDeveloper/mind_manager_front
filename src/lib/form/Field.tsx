import React, { FC, ReactNode } from 'react';
import { useField } from 'formik';
import styled from 'styled-components';
import { Col, Row, Text, SizedComponent } from 'ui';

export interface FieldProps extends SizedComponent {
  name: string;
  label?: string | ReactNode;
  children?: ReactNode;
}

export interface FormFieldProps<ControlProps = unknown>
  extends Omit<FieldProps, 'children'> {
  controlProps?: ControlProps;
}

const FieldBox = styled(Row)`
  margin-bottom: 16px;
  
  .field-label-box {
    padding-bottom: 4px;
  }
`;


const Field: FC<FieldProps> = ({ name, label, size, children }) => {
  const [, meta] = useField(name);
  return (
    <FieldBox>
      {label && <Col className="field-label-box" span={24}>{ label }</Col>}
      <Col span={24}>{ children }</Col>
      {
        <Col span={24}>
          <Text color="red" level={5}>
            { (meta.touched && meta.error) ? meta.error : null }
          </Text>
        </Col>
      }
    </FieldBox>
  );
};


export { useField } from 'formik';
export default Field;
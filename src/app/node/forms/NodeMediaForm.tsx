import React, { FC } from 'react';
import Form, { FormProps } from 'lib/form';
import InputField from 'lib/form/fields/InputField';
// import TextField from 'lib/form/fields/TextField';
// import YoutubeUrlInputField from 'lib/form/fields/YoutubeUrlInputField';
import { NodeMedia } from 'types/node';

export interface NodeMediaFormProps
  extends FormProps<Partial<NodeMedia>> {}

const NodeMediaForm: FC<NodeMediaFormProps> = (
  { initialValues = {}, ...rest}
) => {
  return (
    <Form initialValues={initialValues} {...rest}>
      {/*<Form layout="vertical" {...formProps}>*/}
      {/*  {({ values }) => (*/}
      {/*    <>*/}
      {/*      <SelectMediaTypeField name="type" label="Type" />*/}
      {/*      <InputField name="title" label="Title" />*/}
      {/*      <TextField name="description" label="Description" />*/}
      {/*      {values?.type === 'youtube' &&*/}
      {/*        <YoutubeUrlInputField*/}
      {/*          name="config.youtube_video_url"*/}
      {/*          label="Youtube video url"*/}
      {/*          controlProps={{ placeholder: 'Enter video url or id' }}*/}
      {/*        />*/}
      {/*      }*/}
      {/*    </>*/}
      {/*  )}*/}
      {/*</Form>*/}
    </Form>
  );
};

export default NodeMediaForm;
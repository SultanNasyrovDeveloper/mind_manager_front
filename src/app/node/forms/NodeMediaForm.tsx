import React, { FC } from 'react';
import { FormManager, FormManagerProps, Form } from 'lib/form';
import InputField from 'lib/form/fields/InputField';
// import TextField from 'lib/form/fields/TextField';
// import YoutubeUrlInputField from 'lib/form/fields/YoutubeUrlInputField';
import { NodeMedia } from 'types/node';
import SelectMediaTypeField from '../components/media/SelectMediaTypeField';

export interface NodeMediaFormProps
  extends Omit<FormManagerProps<Partial<NodeMedia>>, 'initialValues'> {
    initialValues?: Partial<NodeMedia>;
}

const NodeMediaForm: FC<NodeMediaFormProps> = (
  { formProps, initialValues = {}, ...rest}
) => {
  return (
    <FormManager initialValues={initialValues} {...rest}>
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
    </FormManager>
  );
};

export default NodeMediaForm;
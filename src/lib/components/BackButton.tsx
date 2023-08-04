import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Url } from 'types/api';
import { Button, ButtonProps } from 'ui';
import { ArrowLeftOutlined } from 'ui/icons';

export interface BackButtonProps
  extends Omit<ButtonProps, 'icon'> {
  url?: Url;
}

const BackButton: FC<BackButtonProps> = (
  { url, onClick, ...rest}
) => {
  const navigate = useNavigate();
  
  return (
    <Button
      type="text"
      icon={<ArrowLeftOutlined />}
      onClick={() => url ? navigate(url) : navigate(-1)}
      {...rest}
      
    />
  );
};

export default BackButton;
import React, { FC } from 'react';
// TODO: Wrong import. ui should not import from lib
import BackButton from 'lib/components/BackButton';
import { Url } from 'types/api';
import { Card, CardProps, Space } from 'ui';

export interface PageHeaderProps
	extends Pick<CardProps, 'title' | 'extra' | 'subtitle' | 'hoverable' | 'size'> {
	isShowBackButton?: boolean;
	backUrl?: Url;
}

const PageHeader: FC<PageHeaderProps> = ({
	title,
	backUrl,
	isShowBackButton,
	...rest
}) => {
  return (
    <Card
	    title={
				<Space>
					{isShowBackButton && <BackButton url={backUrl} />}
					{ title }
				</Space>
	    }
	    {...rest}
    />
  );
};

export default PageHeader;
import React, { FC } from 'react';
import { NodeMedia } from 'types/node';

export interface MediaListProps {
  media: NodeMedia[];
}

const MediaList: FC<MediaListProps> = ({...rest}) => {
  return (
    <div></div>
  );
};

export default MediaList;
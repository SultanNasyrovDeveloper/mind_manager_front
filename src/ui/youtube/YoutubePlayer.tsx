import React, { FC } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

export interface YoutubePlayerProps
	extends YouTubeProps {}

const YoutubePlayer: FC<YoutubePlayerProps> = ({...rest}) => {
  return (
    <YouTube {...rest} />
  );
};

export default YoutubePlayer;
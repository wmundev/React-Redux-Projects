import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const videosDisplay = videos.map(video => {
    const key = video.id.videoId ? video.id.videoId : video.id.channelId;
    return (
      <VideoItem
        video={video}
        onVideoSelect={onVideoSelect}
        key={key}
      />
    );
  });
  return <div className="ui relaxed divided list">{videosDisplay}</div>;
};

export default VideoList;

import React from 'react';
import videos from '../data/videos.json';

const VideoGrid = () => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {videos.map(video => (
        <div key={video.id} className="border rounded shadow hover:shadow-lg">
          <img src={video.thumbnail} alt={video.title} className="w-full" />
          <div className="p-2">
            <h2 className="font-semibold">{video.title}</h2>
            <p className="text-sm text-gray-600">{video.channel}</p>
          </div>
        </div>
      ))}
    </main>
  );
};

export default VideoGrid;

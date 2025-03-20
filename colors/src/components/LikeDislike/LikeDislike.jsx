// LikeDislike.jsx
import React, { useState } from 'react';

const LikeDislike = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };

  return (
    <div className="flex space-x-4">
      <button
        onClick={handleLike}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Like ({likeCount})
      </button>
      <button
        onClick={handleDislike}
        className="p-2 bg-red-500 text-white rounded"
      >
        Dislike ({dislikeCount})
      </button>
    </div>
  );
};

export default LikeDislike;

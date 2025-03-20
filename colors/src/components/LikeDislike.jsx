import { useState } from "react";

export default function LikeDislike() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div>
      <button className="like" onClick={() => setLikes(likes + 1)}>
        Like ({likes})
      </button>
      <button className="dislike" onClick={() => setDislikes(dislikes + 1)}>
        Dislike ({dislikes})
      </button>
    </div>
  );
}

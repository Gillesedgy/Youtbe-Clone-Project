import React from "react";

export default function VideoCard({ result }) {
  return (
    <div>
      {result.items.map((vid) => (
        <div key={vid.id} className="card">
          <img src={vid.snippet.thumbnails.medium} alt={vid.snippet.title} />
        </div>
      ))}
    </div>
  );
}

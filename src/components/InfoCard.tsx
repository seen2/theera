import Image from "next/image";
import React from "react";
import logo from "../public/logo.jpg";
//https://www.youtube.com/watch?v=phnOkaZN_CQ&t=3s

export default function InfoCard() {
  return (
    <div className="card m-3" style={{ maxWidth: "75rem" }}>
      <div className="card-body">
        <div className="ratio ratio-16x9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/phnOkaZN_CQ?modestbranding=1"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            auto-hide={1}
            allowFullScreen
          ></iframe>
        </div>

        <h5 className="card-title">Card title</h5>
        
        
      </div>
    </div>
  );
}

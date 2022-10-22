import Image from "next/image";
import React from "react";
import logo from "../public/logo.jpg";
//https://www.youtube.com/watch?v=phnOkaZN_CQ&t=3s

export default function InfoCard() {
  return (
    <div className="card m-3" style={{ maxWidth: "75rem" }}>
      <div className="card-body">
      <Image
          src={"http://i3.ytimg.com/vi/phnOkaZN_CQ/hqdefault.jpg"}
          alt={"Title"}
          height={"300"}
          width={"500"}
          />

        <h5 className="card-title">Card title</h5>
        
        
      </div>
    </div>
  );
}

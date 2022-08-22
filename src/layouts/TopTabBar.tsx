import React from "react";

export default function TopTabBar() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          GLobal
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Business
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Shorts
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Meme</a>
      </li>
    </ul>
  );
}

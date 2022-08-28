import React from "react";
import Logo from "../components/Logo";

export default function TopTabBar(props: { children: JSX.Element }) {
  return (
    <div>
      <Logo />
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Global
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
            Business
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Dots
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
      {props.children}
    </div>
  );
}

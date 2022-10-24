import Link from "next/link";
import React from "react";
import Logo from "../components/Logo";
import BottomBar from "../components/BottomBar";
import SocialRibon from "../components/SocialRibon";

import dynamic from "next/dynamic";

const DynamicClock = dynamic(() => import("../components/Clock"), {
  ssr: false,
});

export default function TopTabBar(props: { children: JSX.Element }) {
  return (
    <div className="container">
      <div className="d-flex hstack gap-3 flex-wrap">
        <div>
          <Logo />
        </div>
        <div className="ms-auto ms-sm-nonde">
        <DynamicClock />
        </div>
      </div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link href={"/"}>
            <a className="nav-link" aria-current="page">
              Home
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href={"/globalNews"}>
            <a className="nav-link">Global</a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href={"/business"}>
            <a className="nav-link">Business</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href={"/dots"}>
            <a className="nav-link">Dots</a>
          </Link>
        </li>
        <li className="nav-item">
          <Link href={"/shorts"}>
            <a className="nav-link">Shorts</a>
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Meme(coming soon)</a>
        </li>
      </ul>
      {props.children}
      <hr />
      <SocialRibon />
      <BottomBar />
    </div>
  );
}

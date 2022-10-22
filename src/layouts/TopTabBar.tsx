import Link from "next/link";
import React from "react";
import Logo from "../components/Logo";

export default function TopTabBar(props: { children: JSX.Element }) {
  return (
    <div>
      <Logo />
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link href={"/"} >
          <a className="nav-link" aria-current="page" >
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
    </div>
  );
}

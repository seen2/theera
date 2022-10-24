import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faTwitter,
  faInstagram,
  faSquareTwitter
} from "@fortawesome/free-brands-svg-icons";
import dynamic from 'next/dynamic';


const DynamicClock = dynamic(() => import("./Clock"), {
  ssr: false,
});

export default function SocialRibon() {
  return (
    <div className='mx-md-10 ' >
      <FontAwesomeIcon title='Yotube' color='red' size={"3x"} icon={faYoutube} />
      <FontAwesomeIcon title='Twitter' color='blue' size={"3x"} icon={faTwitter} />
      <FontAwesomeIcon title='Instagram' color='blue' size={"3x"} icon={faInstagram} />
      <FontAwesomeIcon title='Koo' color='yellow' size={"3x"} icon={faSquareTwitter} />
      <DynamicClock />


    </div>
  )
}

/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import logo from "../public/logo.jpg";
//https://www.youtube.com/watch?v=phnOkaZN_CQ&t=3s

export default function VideoCard() {
  return (
    <div className="card m-3" style={{ maxWidth: "75rem" }}>
      <div className="card-body">
        <div className="ratio ratio-16x9">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/phnOkaZN_CQ?modestbranding=1&rel=0&showinfo=0 "
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h5 className="card-title">Card title</h5>

        <div className="container  ">
          President Biden held with Prime Minister Modi. He met virtually with
          Prime Minister #Modi. This is ahead of the U.S.-India 2+2 ministerial
          that Secretary #Blinken and #Secretary #Austin had held a talk today
          with their Indian counterparts S. Jaishankar and Rajnath Singh. The
          virtual talk was held without any prior information. The focus of the
          meeting was: Free and open Indo pacific #QUAD Conflict in #Ukraine
          Diversification of India's energy requirement and defense import.
          India and US signed a bilateral space situational awareness
          arrangement During the joint press statement Secretary Blinken said
          that we acknowledge the humanitarian support for Ukraine and we
          understand that India Russia relationship has developed over decades
          when we were not able to do so but now we are willing to. When asked
          about Oil imports, Indian #MEA S. #Jaishankar said that "India
          probably buys less oil from Russia in month than what Europe does in
          one afternoon". Overview: The U.S.-#India 2+2 was decided on the 75th
          anniversary of diplomatic relations between India and the US. United
          States ' concern is about China is being soft on India and praising
          India for its independent foreign policy also Chinese media reports
          about the BRICS payment system were the main reason for the virtual
          meeting between Modi and Biden If the BRICS payment system is adopted
          by India it will be a great setback for the entire West. #US wants
          India to stop its defense and oil imports from Russia. India is
          concerned about its interest and opportunity in building its
          self-reliant economy. Indian officials said that Russian weapons are
          cheaper and involved technology transfer with India and US defense
          companies are not willing to transfer their technology. Conclusion: US
          and India both are committed to countering China's aggression in Indo
          pacific region and will make QUAD more stronger and reliable. US and
          India will also share their intelligence in space to protect their
          #space programs and #cyberspace for technology training. India will
          support QUAD for countering china in Indo-pacific. India will continue
          its trade with Russia because Russia is a time-tested friend of India.
          US is trying to build its relationship with India and can not replace
          Russia soon but If the mutual interests will be aligned, India might
          be interested in opportunities in deepening the relationships with US.
          #Unbiased_news_and_briefings.
        </div>
      </div>
    </div>
  );
}

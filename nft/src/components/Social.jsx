import React from "react";
// import {
//   SiFacebook,
//   SiTwitter,
//   SiInstagram,
//   SiMedium,
//   SiTelegram,
// } from "react-icons/si";

// import { siKakaotalk } from 'simple-icons/icons';

const SocialShare = [
  {
    iconName: <img src="img/social/1.png" alt=""/>,
    link: "https://opensea.io/collection/riddlehead",
  },
  { iconName: <img src="img/social/2.png" alt=""/>, link: "https://open.kakao.com/o/g0NONnKd" },
  { iconName: <img src="img/social/3.png" alt=""/>, link: "https://twitter.com/RiddleHead_NFT" },
  // { iconName: <img src="img/social/4.png" alt=""/>, link: "https://telegram.org/" },
];

const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;

import heroimg from "../assets/hero-image.png";

import hightlightimg from "../assets/hightlightimg.png";
import sneakershoe from "../assets/sneaker.png";

import clip from "../assets/video/clip.mp4";
import vcover1 from "../assets/video/vcover1.png";
import vcover2 from "../assets/video/vcover2.png";
import vcover3 from "../assets/video/vcover3.png";

import psale1 from "../assets/adidas-air-red.png";
import psale2 from "../assets/adidas-agape-cc.png";
import psale3 from "../assets/adidas-agape-smart.png";


import adidas1 from "../assets/adidas1.png";
import adidas2 from "../assets/adidas2.png";
import adidas3 from "../assets/adidas3.png";
import adidas4 from "../assets/adidas4.png";
import adidas5 from "../assets/adidas5.png";
import adidas6 from "../assets/adidas6.png";
import adidas7 from "../assets/adidas7.png";
import adidas8 from "../assets/adidas8.png";
import adidas9 from "../assets/adidas9.png";
import adidas10 from "../assets/adidas10.png";
import adidas11 from "../assets/adidas11.png";
import adidas12 from "../assets/adidas12.png";



import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";
import messenger from "../assets/messenger.svg";

const heroapi = {
  title: "Find What Suits You!",
  img: heroimg,
  btntext: "Explore Now",
  videos: [
    { imgsrc: vcover1, clip: clip },
    { imgsrc: vcover2, clip: clip },
    { imgsrc: vcover3, clip: clip },
  ],
  sociallinks: [
    { icon: facebook },
    { icon: messenger },
    { icon: instagram },
    { icon: twitter },
    { icon: youtube },
  ],
};

const popularsales = {
  title: "Featured Products",
  items: [
    {
      id: "0p0x1",
      title: "Adidas Agape CC",
      rating: "4.2",
      btn: "Purchase",
      img: psale2,
      price: "1000",
      color: "from-blue-600 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0p0x2",
      title: "Adidas Air Red",
      rating: "4.5",
      btn: "Purchase",
      img: psale1,
      price: "2000",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0p0x3",
      title: "Adidas Smart 2.0",
      rating: "5+",
      btn: "Purchase",
      img: psale3,
      price: "2300",
      color: "from-violet-500 to-indigo-500",
      shadow: "shadow-lg shadow-violet-500",
    },
  ],
};

const highlight = {
  heading: "HIGHLIGHTS",
  title: "ADIDAS AIR WITH LIMITLESS CHOICES",
  text: "Our Purpose is to move the world forward. We take action by building community, protecting our planet and increasing access to sport.",
  btn: "Check Out",
  url: "https://www.nike.com/launch/t/nocta-hot-step-black-gold",
  img: hightlightimg,
};

const sneaker = {
  heading: "FEATURED",
  title: "ADIDAS SNEAKERS AIR LANCING SHOES",
  text: "The radiance lives on Nike Sneakers Air Lancing Shoes, the basket ball OG that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
  btn: "Check Out",
  url: "https://sneakernews.com/2022/03/21/nike-lebron-2-retro-white-midnight-navy-varsity-crimson-dr0826-100/",
  img: sneakershoe,
};

const toprateslaes = {
  title: "Top Rated Sneakers",
  items: [
    {
      id: "0M0x1",
      title: "Adidas Low Premium",
      rating: "5+",
      btn: "Purchase",
      img: adidas1,
      price: "2150",
      color: "from-sky-600 to-indigo-600",
      shadow: "shadow-lg shadow-blue-500",
    },
    {
      id: "0M0x2",
      title: "Adidas AirForce Green",
      rating: "5+",
      btn: "Purchase",
      img: adidas2,
      price: "3250",
      color: "from-green-500 to-emerald-500",
      shadow: "shadow-lg shadow-green-500",
    },
    {
      id: "0M0x3",
      title: "Adidas Addapt Rose",
      rating: "5+",
      btn: "Purchase",
      img: adidas3,
      price: "4990",
      color: "from-red-500 to-rose-500",
      shadow: "shadow-lg shadow-rose-500",
    },
    {
      id: "0M0x4",
      title: "Adidas Air Premium",
      rating: "5+",
      btn: "Purchase",
      img: adidas4,
      price: "2350",
      color: "from-orange-500 to-amber-500",
      shadow: "shadow-lg shadow-orange-500",
    },
    {
      id: "0M0x5",
      title: "Adidas Adapt BB",
      rating: "5+",
      btn: "Purchase",
      img: adidas5,
      price: "1230",
      color: "from-gray-900 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x6",
      title: "Adidas Jordan PR3",
      rating: "5+",
      btn: "Purchase",
      img: adidas6,
      price: "1750",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-lg shadow-cyan-500",
    },
    {
      id: "0M0x7",
      title: "Adidas Mulint Shoe",
      rating: "5+",
      btn: "Purchase",
      img: adidas7,
      price: "1250",
      color: "from-yellow-500 to-yellow-500",
      shadow: "shadow-lg shadow-yellow-500",
    },
    {
      id: "0M0x8",
      title: "Adidas Jordan  Max",
      rating: "5+",
      btn: "Purchase",
      img: adidas8,
      price: "1520",
      color: "from-[#936550] to-orange-900",
      shadow: "shadow-lg shadow-orange-800",
    },
    {
      id: "0M0x9",
      title: "Adidas Old Max-x",
      rating: "5+",
      btn: "Purchase",
      img: adidas9,
      price: "1950",
      color: "from-indigo-700 to-indigo-700",
      shadow: "shadow-lg shadow-indigo-500",
    },
    {
      id: "0M0x10",
      title: "Adidas Lime 11",
      rating: "5+",
      btn: "Purchase",
      img: adidas10,
      price: "1650",
      color: "from-green-600 to-lime-500",
      shadow: "shadow-lg shadow-lime-500",
    },
    {
      id: "0M0x11",
      title: "Adidas Air Max",
      rating: "5+",
      btn: "Purchase",
      img: adidas11,
      price: "1350",
      color: "from-slate-900 to-black",
      shadow: "shadow-lg shadow-black",
    },
    {
      id: "0M0x12",
      title: "Adidas Zoom Max",
      rating: "5+",
      btn: "Purchase",
      img: adidas12,
      price: "1540",
      color: "from-blue-900 to-blue-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};



const footerAPI = {
  titles: [ {title: "About Adidas"},{title: "Get Help"},{title: "Company"} ],
  links: [
    [
      {link: "News"},
      {link: "Careers"},
      {link: "Investors"},
      {link: "Purpose"},
      {link: "Sustainability"},
    ],
    [
      {link: "Order Status"},
      {link: "Shipping & Delivery"},
      {link: "Payment Options"},
      {link: "Contact Us"},
      {link: "FAQ"},
    ],
    [
      {link: "Gift Cards"},
      {link: "Promotions"},
      {link: "Find A Store"},
      {link: "Signup"},
      {link: "Send Us Feeback"},
    ],
  ]
};


export { heroapi, footerAPI, sneaker, highlight, toprateslaes, popularsales };
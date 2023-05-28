import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";
import mock5 from "../img/mock5.png";

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(245, 61, 147)", "rgb(158, 117, 35)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
  firstName: "Vivi",
  lastName: "Agustina Ratnasari",
  initials: "VIVI", // the example uses first and last, but feel free to use three or more if you like.
  position: "Graduated from State Polytechnic of Malang",
  selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  miniBio: [
    // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
    {
      emoji: "🥗",
      text: "Cooking healthy food",
    },
    {
      emoji: "🌎",
      text: "Based in the Surabaya, East Java",
    },
    {
      emoji: "💼",
      text: "Desired to be UI/UX Designer and Database administrator",
    },
    {
      emoji: "📧",
      text: "viviagustinaratnasari34@gmail.com",
    },
  ],
  socials: [
    {
      link: "https://facebook.com/vivi.agustinar",
      icon: "fa fa-facebook",
      label: "facebook",
    },
    {
      link: "https://instagram.com/viviagustinas",
      icon: "fa fa-instagram",
      label: "instagram",
    },
    {
      link: "https://github.com/AgustinaVivi",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/viviagustinas/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
    {
      link: "https://behance.net/viviratnasari",
      icon: "fa fa-behance",
      label: "behance",
    },
    {
      link: "https://drive.google.com/file/d/12OKV5mBhdqH4rec_Dp9Dm8_E3IMOvA-7/view?usp=share_link",
      icon: "fa fa-file",
      label: "cv",
    },
    // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
    // Just change the links so that they lead to your social profiles.
  ],
  bio: "Hello! I'm Vivi. An Informatics Engineering Bachelor's Degree of from State Polytechnic Of Malang (Agustus 2018 - July 2022) who currently learning Database Administrator and UI/UX Designer. Had experience as Strategy Architechture and Design IT at the pawnshop Indonesia. Skilled in good communication, teamwork, analytical thinking and problem solving.",
  skills: {
    proficientWith: [
      "Figma",
      "Adobe XD",
      "Justinmind",
      "Visual Paradigm",
      "bootstrap",
      "html5",
      "My SQL",
      "css3",
      "Dbeaver",
    ],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
    },
    // Same as above, change the emojis to match / relate to your hobbies or interests.
    // You can also remove the emojis if you'd like, I just think they look cute :P
  ],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "A Gold App that Works with the design in Amartha App",
      desc: "A gold application that works with amartha to provide the best design to Amartha", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source:
        "https://www.figma.com/proto/8gTP5wm7ffYhFPENyYPZ4m/Kelompok-4?page-id=164%3A282&node-id=164%3A283&viewport=342%2C297%2C0.13&scaling=scale-down&starting-point-node-id=164%3A283", // this should be a link to the **repository** of the project, where the code is hosted.
      image: mock1,
    },
    {
      title: "Online Study Learning Application (STULEN)",
      desc: "Online study learning application based on informatics engineerin courses. In this application, you can make payments to buy an IT course and can directly consult with the experts.",
      source:
        "https://www.figma.com/proto/1CvK2lxB7jidAhrSd4DMja/%F0%9F%8E%89Vivi-Agustina-Ratnasari---Assignment-Week-%237?page-id=336%3A76&node-id=498%3A467&viewport=443%2C64%2C0.07&scaling=scale-down&starting-point-node-id=475%3A491&show-proto-sidebar=1",
      image: mock2,
    },
    {
      title: "Fonterra Application",
      desc: "This application is an online purchase application of various types and cheese products",
      source:
        "https://www.figma.com/proto/1CvK2lxB7jidAhrSd4DMja/%F0%9F%8E%89Vivi-Agustina-Ratnasari---Assignment-Week-%237?page-id=1210%3A2089&node-id=1216%3A2097&viewport=524%2C80%2C0.51&scaling=scale-downaytonjewell",
      image: mock3,
    },
    {
      title: "Online complaint system",
      desc: "An information system for online complaints from a software company that provides complaint services for customers",
      source:
        "https://www.figma.com/proto/1CvK2lxB7jidAhrSd4DMja/%F0%9F%8E%89Vivi-Agustina-Ratnasari---Assignment-Week-%237?page-id=1142%3A1600&node-id=1150%3A2438&viewport=-346%2C283%2C0.4&scaling=scale-down&starting-point-node-id=1143%3A1601&show-proto-sidebar=1",
      image: mock4,
    },
    {
      title:
        "Monitoring And Management Information System For New Renewable Energy Based On Web GIS With RESTFUL API",
      desc: "A web monitoring and management information system for GIS web-based renewable energy with restful API which is a case study of the collaboration between the Malang State Polytechnic and PT. PLN Persero. A new breakthrough for the New Renewable Energy Power Plant monitoring system web project organized by PT. PLN Persero",
      source: "https://ebtpolinema.000webhostapp.com/",
      image: mock5,
    },
  ],
};

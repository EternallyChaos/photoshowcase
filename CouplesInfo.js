import HimachalImageOne from "/public/himachal/1.jpg";
import HimachalImageTwo from "/public/himachal/2.jpg";
import HimachalImageThree from "/public/himachal/3.jpg";
import HimachalImageFour from "/public/himachal/4.jpg";
import HimachalImageFive from "/public/himachal/5.jpg";

import HimachalLandscapeImage from "/public/himachal/landscape.jpg";

import OdishaImageOne from "/public/odisha/1.jpg";
import OdishaImageTwo from "/public/odisha/2.jpg";
import OdishaImageThree from "/public/odisha/3.jpg";
import OdishaImageFour from "/public/odisha/4.jpg";
import OdishaImageFive from "/public/odisha/5.jpg";

import OdishaLandscapeImage from "/public/odisha/1.jpg";

import KolkataImageOne from "/public/kolkata/1.jpg";
import KolkataImageTwo from "/public/kolkata/2.jpg";
import KolkataImageThree from "/public/kolkata/3.jpg";
import KolkataImageFour from "/public/kolkata/4.jpg";
import KolkataImageFive from "/public/kolkata/5.jpg";

import KolkataLandscapeImage from "/public/kolkata/1.jpg";

import GoaImageOne from "/public/goa/1.jpg";
import GoaImageTwo from "/public/goa/2.jpg";
import GoaImageThree from "/public/goa/3.jpg";
import GoaImageFour from "/public/goa/4.jpg";
import GoaImageFive from "/public/goa/5.jpg";

import GoaLandscapeImage from "/public/goa/1.jpg";

const CouplesInfo = [
  {
    id: "pinky-satyaki",
    name: "Pinky and Satyaki",
    groom: "SATYAKI",
    bride: "PINKY",
    location: "Solan, Himachal Pradesh",
    coordinates: [76.9795068, 31.8100458],
    landscapeImage: HimachalLandscapeImage,
    slides: [
      HimachalImageOne,
      HimachalImageTwo,
      HimachalImageThree,
      HimachalImageFour,
      HimachalImageFive,
    ],
  },
  {
    id: "aayush-shweta",
    name: "Aayush and Shweta",
    groom: "AAYUSH",
    bride: "SHWETA",
    location: "Cuttack, Odisha",
    coordinates: [85.7851719, 20.4630879],
    landscapeImage: OdishaLandscapeImage,
    slides: [
      OdishaImageOne,
      OdishaImageTwo,
      OdishaImageThree,
      OdishaImageFour,
      OdishaImageFive,
    ],
  },
  {
    id: "karl-bhavika",
    name: "Karl and Bhavika",
    groom: "KARL",
    bride: "BHAVIKA",
    location: "Kolkata, West Bengal",
    coordinates: [88.26795068, 22.5300458],
    landscapeImage: KolkataLandscapeImage,
    slides: [
      KolkataImageOne,
      KolkataImageTwo,
      KolkataImageThree,
      KolkataImageFour,
      KolkataImageFive,
    ],
  },
  {
    id: "sagar-saheli",
    name: "Sagar and Saheli",
    groom: "SAGAR",
    bride: "SAHELI",
    location: "Candolim, Goa",
    coordinates: [73.7458117, 15.3487555],
    landscapeImage: GoaLandscapeImage,
    slides: [
      GoaImageOne,
      GoaImageTwo,
      GoaImageThree,
      GoaImageFour,
      GoaImageFive,
    ],
  },
];

export { CouplesInfo };

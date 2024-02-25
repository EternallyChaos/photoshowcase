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
    location: "Kotgarh, Himachal Pradesh",
    coordinates: [77.4680928, 31.3093338],
    landscapeImage: HimachalLandscapeImage,
    slides: [
      HimachalImageOne,
      HimachalImageTwo,
      HimachalImageThree,
      HimachalImageFour,
      HimachalImageFive,
    ],
    title: "Elopement in the Mountains",
    descriptionLines: [
      {
        id: 1,
        text: "Couples opting for elopement typically choose to exchange vows in a location that holds personal significance to them, such as a scenic spot, a destination they both cherish, or even a courthouse. Elopement ceremonies are usually small, involving only the couple or a handful of close friends and family members.",
      },
      {
        id: 2,
        text: "Kotgarh is a picturesque region located in the state of Himachal Pradesh, India. Nestled amidst the scenic beauty of the Himalayas, Kotgarh is renowned for its apple orchards and stunning landscapes. Situated in the Shimla district, this serene destination offers a tranquil escape from the hustle and bustle of city life.",
      },
      {
        id: 3,
        text: "We felt taunted by the beautiful photos of Kotgarh, Himachal Pradesh, and specifically by the unique cultural heritage of the Himachal.",
      },
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
    title: "Love is like a river",
    descriptionLines: [
      {
        id: 1,
        text: "Cuttack is a historic city located in the eastern Indian state of Odisha. Positioned on the banks of the Mahanadi River, Cuttack is one of the oldest inhabited cities in the region, with a rich cultural and historical heritage. The Mahanadi River, one of the major rivers of India, holds immense significance for the city. Cuttack and the Mahanadi River together reflect the intertwining of history, culture, and natural beauty, making the city a significant cultural and economic hub in the state of Odisha.",
      },
      {
        id: 2,
        text: "We could not resist the temptation to include her in the journey of our newly married couple.",
      },
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
    title: "Love has no boundaries",
    descriptionLines: [
      {
        id: 1,
        text: "A foreigner marrying a Bengali girl represents a union that transcends cultural and national boundaries. Such marriages often bring together diverse backgrounds, languages, and traditions, creating a unique blend of experiences and perspectives.",
      },
      {
        id: 2,
        text: "Ultimately, such marriages highlight the universality of love and the ability of individuals from different backgrounds to come together, build meaningful connections, and create a shared life that reflects the best of both worlds.",
      },
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
    title: "With love comes serenity",
    descriptionLines: [
      {
        id: 1,
        text: "Goa, renowned for its breathtaking beaches, vibrant culture, and laid-back atmosphere, has earned a reputation as a romantic destination, making it synonymous with love and romance. The picturesque landscapes, from the golden sands to the swaying palm trees, create a perfect backdrop for couples seeking a romantic getaway.",
      },
      {
        id: 2,
        text: "In the embrace of love, there is a serenity that transcends the chaos of the world, providing solace and a quiet refuge. It's a state where hearts find comfort in each other's presence, and the noise of the outside world fades into the background. We wanted to capture just that.",
      },
    ],
  },
];

export { CouplesInfo };

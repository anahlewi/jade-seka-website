// Metadata for HomePage.js images and their positions
// Update or expand as needed for new images or layout changes

import marrymeImg from '../images/marrymegrills.png';
import marrymeImg600w from '../images/marrymegrills-600w.png';
import africanMaskImg from '../images/african-mask.png';
import africanMaskImg600w from '../images/african-mask-600w.png';
import boardImg from '../images/board.png';
import boardImg600w from '../images/board-600w.png';
import goldRoseImg from '../images/goldenrose.png';
import goldRoseImg600w from '../images/goldenrose-600w.png';
import discoBallImg from '../images/discoball.png';
import discoBallImg600w from '../images/discoball-600w.png';
import gingerbreadHouseImg from '../images/gingerbreadhouse.png';
import gingerbreadHouseImg600w from '../images/gingerbreadhouse-600w.png';
import TravelRequirementsContent from '../../components/TravelRequirementsContent';
import TTDModalContent from '../../components/TTDModalContent';
import ScheduleModalContent from '../../components/ScheduleModalContent';
import OurStoryModalContent from '../../components/OurStoryModalContent';
import FAQModalContent from '../../components/FAQModalContent';

export const homePageImageMetaData = [
// Top row images
    {
        key: 1,
        name: 'Schedule',
        src: boardImg,
        mobileSrc: boardImg600w,
        width: 200,
        height: 200,
        alt: 'message board',
        position: { section: 'top', vertical: 'bottom', horizontal: 'right', grid: { row: 1, col: 1 } },
        modalContent: {
          title: 'Schedule',
          description:<ScheduleModalContent/>

        },
    },
    {
        key:2,
        name: 'Travel',
        src: africanMaskImg,
        mobileSrc: africanMaskImg600w,
        alt: 'flamingo 4',
        position: { section: 'top', vertical:'bottom', horizontal:'right', grid: { row: 1, col: 2 } },
        modalContent: {
          title: 'Travel',
          description: <TravelRequirementsContent/>
        }
    },
  {
    key:3,
    name: 'Things to Do',
    src: discoBallImg,
    mobileSrc: discoBallImg600w,
    alt: 'clipart image of a disco ball',
    position: { section: 'top', grid: { row: 1, col: 3 } },
    vertical:'top', 
    horizontal:'left',
    motion: true,
    transitionDuration: 3,
    modalContent: {
      title: 'Things to Do',
      description: <TTDModalContent/>
    }
  },
  {
    key: 4,
    name: 'Registry',
    src: goldRoseImg,
    mobileSrc: goldRoseImg600w,
    alt: 'gold flower',
    position: { section: 'bottom', grid: { row: 2, col: 1 } },
    vertical:'bottom', 
    horizontal:'left',
    onClick: ()=>{window.open('https://www.honeyfund.com/site/freely-sekanwagi-07-18-2026', '_blank');},
    motion: true,
    transitionDuration: 2
  },
  
  {
    key:5,
    name: 'Our Story',
    src: marrymeImg,
    mobileSrc: marrymeImg600w,
    alt: 'mouth of grills that say marry me',
    position: { section: 'bottom', grid: { row: 2, col: 2 } },
    vertical:'bottom', 
    horizontal:'left',
    modalContent: {
      title: 'Our Story',
      description: <OurStoryModalContent/>
    }
  },
  {
    key:6,
    name: 'FAQs',
    src: gingerbreadHouseImg,
    mobileSrc: gingerbreadHouseImg600w,
    alt: 'flamingo 4',
    position: { section: 'bottom', grid: { row: 2, col: 3 } },
    vertical:'bottom',
    horizontal:'right',
    modalContent: {
      title: 'FAQs',
      description: <FAQModalContent/>
    }
  }
];

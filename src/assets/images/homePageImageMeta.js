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
import scheduleTentImg from '../images/scheduleTent.png';
import { Grid, Box } from '@mui/material';
import TTDModalContent from '../../components/TTDModalContent';
import ModalBoxContainer from '../../components/ModalBoxContainer';
import ModalBoxContent from '../../components/ModalBoxContent';



const scheduleContentList = [{key:'Tampa Guests', title:'Kwanjula', date:'Saturday, May 2, 2026', location:'Tampa, FL'}, 
    { key:'Uganda Guests', title: 'Kasiki', date: 'Saturday, July 11, 2026', location: 'Entebbe, Uganda'},
    {key:'Zanzibar Guests', title: 'Wedding Ceremony', date: 'Saturday, July 18, 2026', location: 'Zanzibar, Tanzania'}];

const citiesInvitedTo = localStorage.getItem('guestCities')?.split(/\s*,\s*/) || [];

const tampaDescription = (displayContent) => {
    return (
            <Box sx={{display: displayContent ? "flex" : "none"}}>
                <strong>Tampa</strong>
                        <ul>
                            <li>Apr 30, 2026:
                            <ul><li>Arrival</li></ul>
                            </li>
                            <li>May 1, 2026:
                            <ul>
                                <li>Welcome Event</li>
                                <li>Immediate Family Dinner</li>
                            </ul>
                            </li>
                            <li>May 2, 2026:
                            <ul>
                                <li>Kwanjula</li>
                                <li>After Party</li>
                            </ul>
                            </li>
                            <li>May 3, 2026:
                            <ul><li>Depart</li></ul>
                            </li>
                        </ul>
            </Box>)
 };
const ugandaDescription =(
  <>              <strong>Uganda</strong>
              <ul>
                <li>Entebbe Jul 8, 2026:
                  <ul><li>Arrival</li></ul>
                </li>
                <li>Kampala Jul 9, 2026:
                  <ul><li>Extended Family Dinner</li></ul>
                </li>
                <li>Kampala Jul 10, 2026:
                  <ul><li>Welcome Event</li></ul>
                </li>
                <li>Entebbe Jul 11, 2026:
                  <ul><li>Kasiki Reception</li></ul>
                </li>
                <li>Entebbe Jul 13, 2026:
                  <ul><li>Depart</li></ul>
                </li>
              </ul>
  </>);

const zanzibarDescription = (
  <><strong>Tanzania</strong>
              <ul>
                <li>Zanzibar Jul 13, 2026:
                  <ul><li>Arrival for Immediate Family</li></ul>
                </li>
                <li>Zanzibar Jul 14, 2026:
                  <ul>
                    <li>Arrival for Most Guests</li>
                    <li>Welcome Event</li>
                  </ul>
                </li>
                <li>Zanzibar Jul 15, 2026:
                  <ul><li>Stone Town and Spice Market Tour</li></ul>
                </li>
                <li>Zanzibar Jul 16, 2026:
                  <ul><li>Jozani Forest aka Monkey Forest Tour</li></ul>
                </li>
                <li>Zanzibar Jul 17, 2026:
                  <ul>
                    <li>Morning Yoga at Resort</li>
                    <li>Group Dinner at Resort</li>
                  </ul>
                </li>
                <li>Zanzibar Jul 18, 2026:
                  <ul>
                    <li>Wedding Ceremony</li>
                    <li>Wedding Reception</li>
                  </ul>
                </li>
                <li>Zanzibar Jul 19, 2026:
                  <ul><li>Rest Day</li></ul>
                </li>
                <li>Zanzibar Jul 20, 2026:
                  <ul><li>Depart</li></ul>
                </li>
              </ul></>);

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
          description: (
            <>
                <Grid container spacing={3} alignContent="center" marginTop={5} direction="row">
                    {scheduleContentList.filter(item=>{return citiesInvitedTo.includes(item.key)}).map((item, index) => (
                        <Grid item  key={index}>
                            <img src={scheduleTentImg} alt="Schedule Tent" />
                            <br />
                            <strong>{item.title}</strong> <br/>
                            {item.date} <br/> {item.location}
                        </Grid>
                    ))} 
                    {}
                </Grid>
            </>
          )
        },
    },
    {
        key:2,
        name: 'Travel Requirements',
        src: africanMaskImg,
        mobileSrc: africanMaskImg600w,
        alt: 'flamingo 4',
        position: { section: 'top', vertical:'bottom', horizontal:'right', grid: { row: 1, col: 2 } },
        modalContent: {
            title: 'Travel Requirements',
            description: (
              <>
              <ModalBoxContainer title={'General Info'} sx={{ mb: 2 }}>
                <ModalBoxContent>
                   <ul>
                    <li>Passport with 6 months validity on arrival date</li>
                    <li>
                      Yellow fever card: <a href="https://wwwnc.cdc.gov/travel/yellow-fever-vaccination-clinics/search" target="_blank" rel="noopener noreferrer">Find a clinic</a>
                    </li>
                  </ul>
                </ModalBoxContent>
              </ModalBoxContainer>

              <ModalBoxContainer title={'Uganda Info'} sx={{ mb: 2 }}>
                <ModalBoxContent>
                <ul>
                  <li>
                    Visa: <a href="https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Uganda.html" target="_blank" rel="noopener noreferrer">Uganda Visa Info</a>
                  </li>
                </ul>
                </ModalBoxContent>
              </ModalBoxContainer>

              <ModalBoxContainer title={'Tanzania Info'} sx={{ mb: 2 }}>
                <ModalBoxContent>
                <ul>
                  <li>
                    Visa: <a href="https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Tanzania.html" target="_blank" rel="noopener noreferrer">Tanzania Visa Info</a>
                  </li>
                  <li>
                    Traveler’s Insurance: <a href="https://inbound.visitzanzibar.go.tz/" target="_blank" rel="noopener noreferrer">Buy Insurance</a>
                  </li>
                </ul>
                </ModalBoxContent>
              </ModalBoxContainer>
  
              </>
            )
            },
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
    onClick: ()=>{window.location.href='https://www.honeyfund.com/site/freely-sekanwagi-07-18-2026';},
    motion: true,
    transitionDuration: 2
  },
  
  {
    key:5,
    name: 'Gallery',
    src: marrymeImg,
    mobileSrc: marrymeImg600w,
    alt: 'mouth of grills that say marry me',
    position: { section: 'bottom', grid: { row: 2, col: 2 } },
    vertical:'bottom', 
    horizontal:'left',
    modalContent: {
      title: 'Gallery',
      description: (
        <>
            <a data-flickr-embed="true" data-footer="true" data-context="true" href="https://www.flickr.com/photos/203252836@N08/54659463399/in/album-72177720327581751" title="C136EE31-64B2-43A1-BEA5-A0E7D72C0399">
                <img src="https://live.staticflickr.com/65535/54659463399_ff45f3f7de.jpg" width="500" height="281" alt="C136EE31-64B2-43A1-BEA5-A0E7D72C0399"/>
            </a>
            <script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>
        </>      
        ),
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
      description: (
        
            <><strong>What should I bring?</strong><ul>
          <li>Insect repellent, swimsuits, sunscreen, sunglasses, comfortable shoes, camera, water shoes, medications, and traveler’s insurance.</li>
        </ul><strong>What should I wear?</strong><ul>
            <li>
              <strong>Kwanjula in Tampa:</strong> Traditional celebratory Ugandan wear is strongly encouraged in pinks and greens. busuutis, kanzus, and more [to be filled in]. If you don’t have any Ugandan or generally African attire, formal Western wear is fine too.
            </li>
            <li>
              <strong>Ceremony in Zanzibar:</strong> For the ceremony and reception in Zanzibar, formal wear of any culture is great. We want everyone to dress to impress so the theme is “upstage the bride”! The only colors that are off limits is white or ivory. If you have to ask, it’s too white!
            </li>
          </ul>
            <strong>Can I bring my kids?</strong>
            <ul>
              <li>Unfortunately, no. The Zanzibar trip will be adults only. We encourage parents to take this time to leave the kids with grandma and grandpa and have a great time on the beach!</li>
            </ul>
            <strong>How much can I expect to spend?</strong>
            <ul>
              <li>
                <strong>$2k for flights</strong>
                <ul>
                  <li>Depending on your starting location, these flights can get as low as $1k round trip but you need to book now. Flight prices increase every day so this is the first thing you should book.</li>
                </ul>
                <strong>$2k for lodging</strong>
                <ul>
                  <li>This is all inclusive which includes lodging, all meals, and alcoholic and nonalcoholic beverages.</li>
                </ul>
                <strong>$1k for fun things</strong>
                <ul>
                  <li>This is a high number because things are very affordable once you get to Zanzibar but this would more than cover any day trips, activities, or souvenirs you’d like to bring back home.</li>
                </ul>
                <strong>$500 for vaccinations</strong>
                <ul>
                  <li>Yellow fever vaccines are not necessary for travel to Zanzibar unless coming from a high risk area.</li>
                  <li>It is strongly recommended to be current on routine vaccinations, including MMR (measles, mumps, rubella), polio, tetanus, diphtheria, and pertussis.</li>
                  <li>It is also strongly recommended to be prescribed malaria medication to take daily while in Zanzibar.</li>
                  <li>If coming from the States, ask your doctor for antibiotics in the case of an upset traveler's stomach.</li>
                </ul>
              </li>
            </ul></>
      )
    }
  }
];

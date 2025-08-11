// Metadata for HomePage.js images and their positions
// Update or expand as needed for new images or layout changes

import marrymeImg from '../images/marrymegrills.png';
import africanMaskImg from '../images/african-mask.png';
import boardImg from '../images/board.png';
import goldRoseImg from '../images/goldenrose.png';
import discoBallImg from '../images/discoball.png';
import gingerbreadHouseImg from '../images/gingerbreadhouse.png';
import scheduleTentImg from '../images/scheduleTent.png';
import { Grid, Box } from '@mui/material';

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
        alt: 'message board',
        position: { section: 'top', vertical: 'bottom', horizontal: 'right', grid: { row: 1, col: 1 } },
        width: 120,
        height: 120,
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
        alt: 'flamingo 4',
        position: { section: 'top', vertical:'bottom', horizontal:'right', grid: { row: 1, col: 2 } },
        modalContent: {
            title: 'Travel Requirements',
            description: (
              <>
                <strong>What you need to get to us:</strong>
                <ul>
                  <li>Passport with 6 months validity on arrival date</li>
                  <li>
                    Yellow fever card: <a href="https://wwwnc.cdc.gov/travel/yellow-fever-vaccination-clinics/search" target="_blank" rel="noopener noreferrer">Find a clinic</a>
                  </li>
                </ul>
                <strong>Uganda</strong>
                <ul>
                  <li>
                    Visa: <a href="https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Uganda.html" target="_blank" rel="noopener noreferrer">Uganda Visa Info</a>
                  </li>
                </ul>
                <strong>Tanzania</strong>
                <ul>
                  <li>
                    Visa: <a href="https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Tanzania.html" target="_blank" rel="noopener noreferrer">Tanzania Visa Info</a>
                  </li>
                  <li>
                    Traveler’s Insurance: <a href="https://inbound.visitzanzibar.go.tz/" target="_blank" rel="noopener noreferrer">Buy Insurance</a>
                  </li>
                </ul>
              </>
            )
            },
    },
  {
    key:3,
    name: 'Things to Do',
    src: discoBallImg,
    alt: 'clipart image of a disco ball',
    position: { section: 'middle', grid: { row: 2, col: 1 } },
    width: 164,
    height: 164,
    vertical:'top', 
    horizontal:'left',
    motion: true,
    transitionDuration: 3,
    modalContent: {
      title: 'Things to Do',
      description: (
        <>
          <ul>
            <li>
              <strong>Tampa</strong>
              <ul>
                <li>
                  <strong>Eat</strong>
                  <ul>
                    <li>Forest Hills Grocery for the Certified Hood Classic™ Cuban sandwich or La Segunda for a more upscale version of the sandwich.</li>
                    <li>Absolutely iconic and delicious vegan and non vegan pizza at Gourmet Pizza Company.</li>
                    <li>Another Tampa legend, Bern’s Steakhouse.</li>
                    <li>-insert seafood spot here-</li>
                  </ul>
                </li>
                <li>
                  <strong>See</strong>
                  <ul>
                    <li>Visit historical Tampa in Ybor City aka Cigar City.</li>
                    <li>Lettuce Lake Regional Park for a beautiful experience in Florida nature.</li>
                    <li>Take a walk down the Hillsborough River via the Tampa Riverwalk with lots to see and do along the way.</li>
                  </ul>
                </li>
                <li>
                  <strong>Do</strong>
                  <ul>
                    <li>Armature Works at the beginning of the Tampa Riverwalk.</li>
                    <li>Sparkman Wharf at the end of the Tampa Riverwalk.</li>
                    <li>Busch Gardens for a fun-fill family day at the amusement park.</li>
                    <li>If you have the time, take the drive out to our family favorite, the gorgeous North Beach at Fort DeSoto.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <strong>Zanzibar</strong>
              <ul>
                <li>
                  <strong>See</strong>
                  <ul>
                    <li>Stone Town</li>
                    <li>Spice Market</li>
                    <li>Jozani Forest</li>
                  </ul>
                </li>
                <li>
                  <strong>Do</strong>
                  <ul>
                    <li>Snorkeling</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </>
      )
    }
  },
  {
    key:4,
    name: 'Registry',
    src: goldRoseImg,
    alt: 'gold flower',
    position: { section: 'middle', grid: { row: 2, col: 2 } },
    width: 124,
    height: 124,
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
    alt: 'mouth of grills that say marry me',
    position: { section: 'bottom', grid: { row: 3, col: 1 } },
    width:168,
    height: 144,
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
    alt: 'flamingo 4',
    position: { section: 'bottom', grid: { row: 3, col: 2 } },
    width:169,
    height:127,
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

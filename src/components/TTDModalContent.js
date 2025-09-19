import ModalBoxContainer from './ModalBoxContainer';
import ModalBoxContent from './ModalBoxContent';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from '@mui/material';
import { getGuestEventConfig } from '../utils/guestEventConfig';
import { renderDescriptionWithLink } from '../utils/renderDescriptionWithLink';

export default function TTDModalContent() {
  const isTablet = useMediaQuery('(max-width:900px)');
  const guestConfig = getGuestEventConfig();
  const allowedEvents = guestConfig.config.flatMap(c => c.events);

  const locations = [
    {
      name: 'Tampa',
      key: 'Kwanjula',
      sections: [
        {
          title: 'Eat',
          items: [
            { text: 'Forest Hills Grocery', url: 'https://maps.app.goo.gl/TvHHfdzhv73ppPGLA', description: 'Forest Hills Grocery for the Certified Hood Classic™ Cuban sandwich.' },
            { text: 'La Segunda', url: 'https://www.lasegundabakery.com/', description: ' La Segunda for a more upscale version of the sandwich.' },
            { text: 'Gourmet Pizza Company', url: 'https://gourmetpizza-company.com/', description: 'Absolutely iconic and delicious vegan and non vegan pizza Gourment Pizza Company.' },
            { text: 'Bern’s Steakhouse', url: 'https://bernssteakhouse.com/', description: 'Another Tampa legend, Bern’s Steakhouse.' },
            { text: 'Mr. & Mrs. Crab', url: 'https://mrmrscrab.com/', description: 'When in Florida, seafood is a must and our family suggests Mr. & Mrs. Crab.' },
          ],
        },
        {
          title: 'See',
          items: [
            { text: 'Ybor City', url: 'https://yborcityonline.com/', description: 'Visit historical Tampa in Ybor City aka Cigar City.' },
            { text: 'Lettuce Lake Regional Park', url: 'https://www.hillsboroughcounty.org/en/locations/lettuce-lake-park', description: 'Lettuce Lake Regional Park for a beautiful experience in Florida nature.' },
            { text: 'Tampa Riverwalk', url: 'https://thetampariverwalk.com/', description: 'Take a walk down the Hillsborough River via the Tampa Riverwalk with lots to see and do along the way.' },
          ],
        },
        {
          title: 'Do',
          items: [
            { text: 'Armature Works', url: 'https://armatureworks.com/', description: 'Armature Works at the beginning of the Tampa Riverwalk.' },
            { text: 'Sparkman Wharf', url: 'https://sparkmanwharf.com/', description: 'Sparkman Wharf at the end of the Tampa Riverwalk.' },
            { text: 'Busch Gardens', url: 'https://buschgardens.com/tampa/', description: 'Busch Gardens for a fun-fill family day at the amusement park.' },
            { text: 'North Beach at Fort DeSoto', url: 'https://www.pinellascounty.org/park/05_Ft_DeSoto.htm', description: 'If you have the time, take the drive out to our family favorite, the gorgeous North Beach at Fort DeSoto.' },
          ],
        },
      ],
    },
    {
      name: 'Zanzibar',
      key: 'Wedding',
      items:[
        { text:'this page', 
          url:'https://www.tripadvisor.com/Attractions-g482884-Activities-Zanzibar_Island_Zanzibar_Archipelago.html', 
          description:"We strongly suggest staying with the group while in Zanzibar and we have an itinerary for activities we’ll be doing together. However, if you decide to explore or are coming early/staying later, check out this page for other fun things to do while on the island!"
        },
        { text:'all inclusive resort',  
          url:'https://toazanzibar.com/', 
          description:"Get your money’s worth and enjoy the all inclusive resort! Eat, drink, and enjoy the beautiful beach and multiple pools."
        }
      ]
   },
  ];

  return (
    <>
      {locations.filter(location => allowedEvents.includes(location.key)).map((location) => (
        <ModalBoxContainer title={location.name} key={location.name}>
          {location.sections && (
            <Stack direction={isTablet ? 'column' : 'row'} spacing={2} sx={{ mb: 2, display: 'flex'}}>
              {location.sections.map((section) => (
                <ModalBoxContent key={section.title} sx={{ flex: 1, minWidth: 0 }}>
                  <strong>{section.title}</strong>
                  <ul>
                    {section.items.map((item, idx) => (
                      <li key={idx} style={{ marginBottom: '0.5em' }}>
                        {item.text ?
                          renderDescriptionWithLink(item.text, item.url, item.description)
                          : item}
                      </li>
                    ))}
                  </ul>
                </ModalBoxContent>
              ))}
            </Stack>
          )}
          {location.items && (
            <ModalBoxContent>
              <ul>
                {location.items.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '0.5em' }}>
                    {item.text ?
                      renderDescriptionWithLink(item.text, item.url, item.description)
                      : item}
                  </li>
                ))}
              </ul>
            </ModalBoxContent>
          )}
        </ModalBoxContainer>
      ))}
    </>
  );
}
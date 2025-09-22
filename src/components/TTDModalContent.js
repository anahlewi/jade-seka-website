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
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import ModalBoxContent from './ModalBoxContent';
import { useMediaQuery } from '@mui/material';
import { getGuestEventConfig } from '../utils/guestEventConfig';

export default function FAQModalContent() {
  const isTablet = useMediaQuery('(max-width:900px)');
  const isMobile = useMediaQuery('(max-width:600px)');
  const guestConfig = getGuestEventConfig();
  const allowedEvents = guestConfig.config.flatMap(c => c.events);
  const faqs = [
    {
      question: 'What should I bring?',
      items: [
        'Insect repellent, swimsuits, sunscreen, sunglasses, comfortable shoes, camera, water shoes, medications, and traveler’s insurance.'
      ],
    },
    {
      question: 'What should I wear?',
      locations: [
        {
          name: 'Ceremony in Zanzibar',
          key: 'Wedding',
          items: [
            'For the ceremony and reception in Zanzibar, formal wear of any culture is great. We want everyone to dress to impress so the theme is “upstage the bride”! This means bright colors, gowns, festival wear, or whatever else feels showy, comfortable, and fun. The only colors that are off limits is white or ivory. If you have to ask, it’s too white!'
          ],
        },
      ],
    },
    {
      question: 'Can I bring my kids?',
      locations: [
        {
          name: 'Kasiki in Uganda',
          key: 'Kasiki',
          items: [
            'Kids are welcome at the Kasiki in Uganda.'
          ],
        },
        {
          name: 'Ceremony in Zanzibar',
          key: 'Wedding',
          items: [
            'The Zanzibar trip will be adults only. We encourage parents to take this time to leave the kids with grandma and grandpa and have a great time on the beach!'
          ],
        },
      ],
    },
    {
      question: 'How much can I expect to spend?',
      items: [
        '$2k for flights: Depending on your starting location, these flights can get as low as $1k round trip but you need to book now. Flight prices increase every day so this is the first thing you should book.',
        '$2k for lodging: This is all inclusive which includes lodging, all meals, and alcoholic and nonalcoholic beverages.',
        '$1k for fun things: This is a high number because things are very affordable once you get to Zanzibar but this would more than cover any day trips, activities, or souvenirs you’d like to bring back home.',
        '$500 for vaccinations: Yellow fever vaccines are not necessary for travel to Zanzibar unless coming from a high risk area. It is strongly recommended to be current on routine vaccinations, including MMR (measles, mumps, rubella), polio, tetanus, diphtheria, and pertussis. It is also strongly recommended to be prescribed malaria medication to take daily while in Zanzibar. If coming from the States, ask your doctor for antibiotics in the case of an upset traveler\'s stomach.'
      ],
    },
  ];

  const showSpendFaq = allowedEvents.includes('Wedding');

  const widthForScreen = () =>{
    if (isTablet){
        return '97vw';
    }
    else if (isMobile){
        return '95vw';  
    }
    else {
        return undefined;
    }
  }

  return (
    <Stack spacing={2} paddingBottom={isTablet ? '45px' : 0}>
      {faqs.filter((faq) => faq.question !== 'How much can I expect to spend?' || showSpendFaq).map((faq, idx) => (
        <Accordion
          key={idx}
          sx={{
            borderRadius: 1,
            backgroundColor: 'rgba(76, 129, 94, 0.5)',
            color: '#2C3607',
            boxShadow: 'none',
            mb: 2,
            width: widthForScreen(),
            maxWidth: widthForScreen(),
            left: isMobile? -4: 0,
            position: isTablet ? 'relative' : undefined,
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="h6" fontFamily="EB Garamond">{faq.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {faq.locations ? (
              faq.locations.filter(loc => allowedEvents.includes(loc.key)).map((loc, locIdx) => (
                <ModalBoxContent key={locIdx} sx={{ marginBottom: 3 }}>
                  <Typography variant="subtitle1" fontFamily="EB Garamond" fontWeight={600}>{loc.name}</Typography>
                  {loc.items.length > 1 ? (
                    <ul>
                      {loc.items.map((item, itemIdx) => (
                        <li key={itemIdx}>
                          <Typography variant="body1" fontFamily="Tenor Sans">{item}</Typography>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <Typography variant="body1" fontFamily="Tenor Sans">{loc.items[0]}</Typography>
                  )}
                </ModalBoxContent>
              ))
            ) : (
              <ModalBoxContent>
                {faq.items.length > 1 ? (
                  <ul>
                    {faq.items.map((item, itemIdx) => (
                      <li key={itemIdx}>
                        <Typography variant="body1" fontFamily="Tenor Sans">{item}</Typography>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Typography variant="body1" fontFamily="Tenor Sans">{faq.items[0]}</Typography>
                )}
              </ModalBoxContent>
            )}
          </AccordionDetails>
        </Accordion>
      ))}
    </Stack>
  );
}

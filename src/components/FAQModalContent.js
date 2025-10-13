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
  
  // Only show 'How much can I expect to spend?' if invited to Wedding Ceremony in Zanzibar
  const allowedEvents =  getGuestEventConfig().config.flatMap(c => c.events);
  const showSpendFaq = allowedEvents.includes('Wedding Ceremony');

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
          name: 'Wedding Ceremony in Zanzibar',
          key: 'Wedding Ceremony',
          items: [
            'For the ceremony and reception in Zanzibar, formal wear of any culture is great. We want everyone to feel their best and dress to impress so the theme is “upstage the bride”! This means bright colors, gowns, festival wear, or whatever else feels showy, comfortable, and fun. The only colors that are off limits is white, ivory, cream, or any other variation of the color. If you have to ask, it’s too white!'
          ],
        },
      ],
    },
    {
      question: 'Can I bring my kids?',
      locations: [
        {
          name: 'Wedding Party in Uganda',
          key: 'Wedding Party',
          items: [
            'Kids are welcome at the Wedding Party in Uganda.'
          ],
        },
        {
          name: 'Wedding Ceremony in Zanzibar',
          key: 'Wedding Ceremony',
          items: [
            'The Zanzibar trip will be adults only. We encourage parents to take this time to leave the kids with grandma and grandpa and have a great time on the beach!'
          ],
        },
      ],
    },
    {
      question: 'How much can I expect to spend?',
      items: [
        {
          title: '$2k for flights',
          details: [
            'Depending on your starting location, these flights can get as low as $1k round trip but you need to book now. Flight prices increase every day so this is the first thing you should book.'
          ]
        },
        {
          title: '$2k for lodging',
          details: [
            'This is all inclusive which includes lodging, all meals, and unlimited alcoholic and nonalcoholic beverages.',
            'Standard rooms for single individuals are $260/day.',
            'Standard rooms for couples are $320/day.',
            'Suites are $600/day for individuals and couples.',
            'If you are planning to travel alone and would like to save money, message Jade or Seka and we can try to connect you to other friends who are also traveling alone.'
          ]
        },
        {
          title: '$1k for fun things',
          details: [
            'This is an ambitious number because things are very affordable once you get to Zanzibar but this would more than cover any day trips, activities, or souvenirs you’d like to bring back home.'
          ]
        },
        {
          title: '$500 for vaccinations',
          details: [
            'Yellow fever vaccines are not necessary for travel to Zanzibar unless coming from a high risk area.',
            'However, it is strongly recommended to be current on routine vaccinations, including MMR (measles, mumps, rubella), polio, tetanus, diphtheria, and pertussis.',
            'It is also strongly recommended to be prescribed malaria medication to take daily while in Zanzibar.',
            'If coming from the States, ask your doctor for antibiotics in the case of an upset traveler\'s stomach.'
          ]
        }
      ],
    },
  ];

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
      {faqs.filter(faq => faq.question !== 'How much can I expect to spend?' || showSpendFaq).map((faq, idx) => {
        // Custom rendering for 'How much can I expect to spend?' question
        if (faq.question === 'How much can I expect to spend?') {
          return (
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
                <ModalBoxContent>
                  <ul style={{ paddingLeft: '1.2em', marginBottom: 0 }}>
                    {faq.items.map((item, itemIdx) => (
                      <li key={itemIdx} style={{ marginBottom: '1em' }}>
                        <Typography variant="body1" fontFamily="Tenor Sans" sx={{ fontWeight: 600 }}>
                          {item.title}:
                        </Typography>
                        <ul>
                          {item.details.map((detail, dIdx) => (
                            <li key={dIdx}>
                              <Typography variant="body2" fontFamily="Tenor Sans">{detail}</Typography>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </ModalBoxContent>
              </AccordionDetails>
            </Accordion>
          );
        }
        // Default rendering for other questions
        return (
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
        );
      })}
    </Stack>
  );
}

import React from 'react';  
import ModalBoxContent from './ModalBoxContent';
import Stack from '@mui/material/Stack';
import { useMediaQuery, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import { getGuestEventConfig } from '../utils/guestEventConfig';


export default function TTDModalContent() {
  const isTablet = useMediaQuery('(max-width:900px)');  
  const guestConfig = getGuestEventConfig();
  const allowedEvents = guestConfig.config.flatMap(c => c.events);

  const locations = [
    {
      name: 'Entebbe, Uganda (July 8 - 13)',
      key:'Kasiki',
      sections: [
        {
            date: 'July 8, 2026',
            items: ['Arrival'],
        },
        {
            date: 'July 9, 2026',
            items: ['Family Dinner'],
        },
        {
            date: 'July 10, 2026',
            items: ['Welcome Event'],
        },
        {
            date: 'July 11, 2026',
            items: ['Kasiki Reception'],
        },
        {
            date: 'July 12, 2026',
            items: ['Depart'],
        },
      ],
    },
    {
      name: 'Zanzibar, Tanzania (July 14 - 20)',
      key: 'Wedding',
      sections: [
        {
            date: 'July 14, 2026',
            items: ['Welcome Event'],
        },
        {
            date: 'July 15, 2026',
            items: ['Stone Town and Spice Market tour'],
        },
        {
            date: 'July 16, 2026',
            items: ['Jozani Forest aka Monkey Forest Tour'],
        },
        {
            date: 'July 17, 2026',
            items: ['Morning Yoga at Resort', 'Group Dinner at Resort'],
        },
        {
            date: 'July 18, 2026',
            items: ['Wedding Ceremony', 'Reception'],
        },  
        {
            date: 'July 19, 2026',
            items: ['Rest Day'],
        }, 
         {
            date: 'July 20, 2026',
            items: ['Depart'],
        },     
    ],
    },
  ];

  function chunkArray(array, size) {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  }

  return (
    <div style={{paddingBottom: isTablet ? '45px' : 0}}>
      {locations.filter(location => allowedEvents.includes(location.key)).map((location) => (
        <Accordion key={location.name} sx={{
            borderRadius: 1,
            backgroundColor: 'rgba(76, 129, 94, 0.5)',
            color: '#2C3607',
            boxShadow: 'none',
            mb: 2,
            width: !isTablet ? undefined : '95vw',
            maxWidth: !isTablet ? undefined : '95vw',
            left: 0,
            position: !isTablet ? undefined : 'relative',
      }}>
        <AccordionSummary sx={{fontFamily:'EB Garamond'}} expandIcon={<ExpandMoreIcon />}>
          <Typography variant='h6' fontFamily="EB Garamond">
            <LocationPinIcon style={{ verticalAlign: 'middle', marginRight: 8 }} />
            {location.name}
           </Typography>
        </AccordionSummary>
          <AccordionDetails>
            {chunkArray(location.sections, 3).map((sectionChunk, chunkIdx) => (
              <Stack direction={isTablet ? 'column' : 'row'} spacing={2} sx={{ mb: 2 }} key={chunkIdx}>
                {sectionChunk.map((section, idx) => (
                  <ModalBoxContent key={section.date || idx} sx={{ flex: 4}}>
                    {section.date && <strong>{section.date}</strong>}
                    {section.items && (
                      <ul>
                        {section.items.map((item, itemIdx) => (
                          <li key={itemIdx}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </ModalBoxContent>
                ))}
              </Stack>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
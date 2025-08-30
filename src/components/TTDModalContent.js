
import ModalBoxContainer from './ModalBoxContainer';
import ModalBoxContent from './ModalBoxContent';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from '@mui/material';

export default function TTDModalContent() {
  const isTablet = useMediaQuery('(max-width:900px)');
  
  const locations = [
    {
      name: 'Tampa',
      sections: [
        {
          title: 'Eat',
          items: [
            'Forest Hills Grocery for the Certified Hood Classic™ Cuban sandwich or La Segunda for a more upscale version of the sandwich.',
            'Absolutely iconic and delicious vegan and non vegan pizza at Gourmet Pizza Company.',
            'Another Tampa legend, Bern’s Steakhouse.',
            '-insert seafood spot here-',
          ],
        },
        {
          title: 'See',
          items: [
            'Visit historical Tampa in Ybor City aka Cigar City.',
            'Lettuce Lake Regional Park for a beautiful experience in Florida nature.',
            'Take a walk down the Hillsborough River via the Tampa Riverwalk with lots to see and do along the way.',
          ],
        },
        {
          title: 'Do',
          items: [
            'Armature Works at the beginning of the Tampa Riverwalk.',
            'Sparkman Wharf at the end of the Tampa Riverwalk.',
            'Busch Gardens for a fun-fill family day at the amusement park.',
            'If you have the time, take the drive out to our family favorite, the gorgeous North Beach at Fort DeSoto.',
          ],
        },
      ],
    },
    {
      name: 'Zanzibar',
      sections: [
        {
          title: 'See',
          items: ['Stone Town', 'Spice Market', 'Jozani Forest'],
        },
        {
          title: 'Do',
          items: ['Snorkeling'],
        },
      ],
    },
  ];

  return (
    <>
      {locations.map((location) => (
        <ModalBoxContainer title={location.name} key={location.name}>
          <Stack direction={isTablet? 'column': 'row'} spacing={2} sx={{ mb: 2 }}>
            {location.sections.map((section) => (
              <ModalBoxContent key={section.title}>
                <strong>{section.title}</strong>
                <ul>
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </ModalBoxContent>
            ))}
          </Stack>
        </ModalBoxContainer>
      ))}
    </>
  );
}
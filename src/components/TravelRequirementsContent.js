import ModalBoxContainer from './ModalBoxContainer';
import ModalBoxContent from './ModalBoxContent';
import Stack from '@mui/material/Stack';
import { useMediaQuery } from '@mui/material';
import { getGuestEventConfig } from '../utils/guestEventConfig';

export default function TravelRequirementsContent() {
  const isTablet = useMediaQuery('(max-width:900px)');
  const guestConfig = getGuestEventConfig();
  const allowedEvents = guestConfig.config.flatMap(c => c.events);

  const locations = [
    {
      name: 'Tampa Requirements',
      key: 'Kwanjula',
      content: 'A Real ID is now required for domestic travel. Please ensure you have this new document prior to travel if you do not have a passport that can be used instead.',
    },
    {
      name: 'Uganda Requirements',
      key: 'Kasiki',
      content: [
        {
          items: [
            'Passport with 6 months validity on arrival date',
            'Yellow fever card',
            'Tourist Visa',
            'Additional information regarding travel to Uganda',
          ],
        },
      ],
    },
    {
      name: 'Zanzibar Requirements',
      key: 'Wedding',
      content: [
        {
            items: ['Passport with 6 months validity on arrival date','Tourist Visa', 'Traveler’s Insurance', 'Additional information regarding travel to Tanzania',]
        },
        {
            title: 'Hotel information',
            items: ['We’ll be staying at TOA Hotel and Spa in Pongwe, Zanzibar, Tanzania. We’ve secured discounted bookings for the all inclusive package which includes daily breakfast, lunch, and dinner, plus alcoholic and nonalcoholic beverages. How to book In order to book your discounted accommodations, email']
        },
        {
            title: 'How To Book',
            items: ['In order to book your discounted accommodations, email reservation@toazanzibar.com and include the following information:', 
                'Subject: Jade & Seka Wedding', 'Body: Your full name, check-in and check-out dates, number of rooms needed, number of guests per room']
        },
        {
            title: 'Payment Details',
            items:['50% due at time of booking', 'Remaining 50% due 14 days before arrival', 'Request a payment link to pay via debit or credit card']
        },
        {
            title: 'Airport Transfers',
            items:['1–4 people: $60', '5–8 people: $80', '8–20 people: $130'],
            content: "Note: We *strongly encourage* booking transportation directly with the hotel"
        },
      ],
    },
    ];

  return (
    <>
      {locations.filter(location => allowedEvents.includes(location.key)).map((location) => (
        <ModalBoxContainer title={location.name} key={location.name}>
          <Stack direction={'column'} spacing={2} sx={{ mb: 2 }}>
            <ModalBoxContent>
            {Array.isArray(location.content) ? location.content.map((section, idx) => (
              <>
               {section.title && <strong>{section.title}</strong>}
                {section.items && (
                  <ul>
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.content && (
                  <div style={{ marginTop: 8, fontStyle: 'italic' }}>{section.content}</div>
                )}
                </>
            )) : (
                <>
                {location.content}
                </>
            )}
        </ModalBoxContent>

          </Stack>
        </ModalBoxContainer>
      ))}
    </>
  );
}
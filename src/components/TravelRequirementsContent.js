import React from 'react';
import ModalBoxContainer from './ModalBoxContainer';
import ModalBoxContent from './ModalBoxContent';
import Stack from '@mui/material/Stack';
import { getGuestEventConfig } from '../utils/guestEventConfig';
import { renderDescriptionWithLink } from '../utils/renderDescriptionWithLink';

export default function TravelRequirementsContent() {
  const guestConfig = getGuestEventConfig();
  const allowedEvents = guestConfig.config.flatMap(c => c.events);

  const locations = [
    {
      name: 'Tampa Requirements',
      key: 'Kwanjula',
      content: {
        text:'Real ID', 
        url:"https://www.tsa.gov/real-id", 
        description:'A Real ID is now required for domestic travel. Please ensure you have this new document prior to travel if you do not have a passport that can be used instead.'},
      },
    {
      name: 'Uganda Requirements',
      key: 'Kasiki',
      content: [
        {
          items: [
            { 
              text: 'Passport', 
              url: 'https://travel.state.gov/content/travel/en/passports.html', 
              description: 'Passport with 6 months validity on arrival date' 
            },
            { 
              text: 'Yellow fever card', 
              url: 'https://wwwnc.cdc.gov/travel/diseases/yellow-fever', 
              description: 'Yellow fever card' 
            },
            { 
              text: 'Tourist Visa', 
              url: 'https://visas.immigration.go.ug/', 
              description: 'Tourist Visa' 
            },
            { 
              text: 'Additional information regarding travel to Uganda', 
              url: 'https://www.visituganda.com/', 
              description: 'Additional information regarding travel to Uganda' 
            },
          ],
        },
      ],
    },
    {
      name: 'Zanzibar Requirements',
      key: 'Wedding',
      content: [
        {
            items: [
              { 
                text: 'Passport', 
                url: 'https://travel.state.gov/content/travel/en/passports.html', 
                description: 'Passport with 6 months validity on arrival date' 
              },
              {
                text: 'Tourist Visa', 
                url: 'https://visa.immigration.go.tz/',
                description: 'Tourist Visa' 
              },
              { text: 'Traveler’s Insurance', 
                url: 'https://inbound.visitzanzibar.go.tz/', 
                description: 'Traveler’s Insurance' 
              },
              { text: 'Additional information regarding travel to Tanzania', 
                url: 'https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages/Tanzania.html', 
                description: 'Additional information regarding travel to Tanzania' 
              },
            ],
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
              <React.Fragment key={idx}>
                {section.title && <strong>{section.title}</strong>}
                {section.items && (
                  <ul>
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} style={{ marginBottom: '0.5em' }}>
                        {typeof item === 'object' && item.text ?
                          renderDescriptionWithLink(item.text, item.url, item.description)
                          : item}
                      </li>
                    ))}
                  </ul>
                )}
                {section.content && (
                  <div style={{ marginTop: 8, fontStyle: 'italic' }}>{section.content}</div>
                )}
              </React.Fragment>
            )) : (
                typeof location.content === 'object' && location.content.text ?
                  renderDescriptionWithLink(location.content.text, location.content.url, location.content.description)
                  : location.content
            )}
        </ModalBoxContent>

          </Stack>
        </ModalBoxContainer>
      ))}
    </>
  );
}
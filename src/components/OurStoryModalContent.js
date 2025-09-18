import React from 'react';
import ModalBoxContent from './ModalBoxContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useMediaQuery } from '@mui/material';
import ModalBoxContainer from './ModalBoxContainer';



const eras = [
  {
    title: "ERA i",
    altTitle:' Boyfriend & Girlfriend',
    subtitle:' The Gifting Wars',
    description: `As eldest children, Jade and Seka are experienced providers and caregivers. They are also each maniacally competitive as former athletes, Jade a swimmer and Seka a footballer. These backgrounds made for the perfect storm, affectionately known as “The Gifting Wars,” as they went band-for-band to out-gift the other. The two sparred for years, each gesture grander than the last; A Versace robe for a pair of Louboutins, studio-recorded music for a hand-painted portrait, a helicopter ride for Beyoncé tickets. Two and a half years later, Seka offered his best gift yet, a diamond ring and proposal.`,
    photos: ['https://i.imgur.com/UEb5fcr.jpeg', 'https://i.imgur.com/iDzIwUl.jpeg', 'https://i.imgur.com/02IEPpr.jpeg'],
    caption:'Photos: A matching grill moment at the Louvre, a surprise trip to see Beyoncé in Jade’s hometown of Tampa, and a family trip to Africa.'
  },
  {
    title: "ERA ii",
    altTitle:'Fiancé & Fiancée',
    subtitle:'Between “Yes” and “I Do”',
    description: `Jade had lived alone as an #independentwoman 💅🏽 for years, but after the proposal, it was time to come together as one. Seka had found a rent-stabilized apartment with a private garden terrace and enough room for himself, Jade, and their feisty feline, Brooklyn. Becoming one came with its challenges for two New York fashionistas — each cut their material life in half, stuffed what could fit in the closet, and rented a storage unit — but eventually, everything finally fit. Two, and a cat, became one.`,
    photos: ['https://i.imgur.com/Q0IikP1.jpeg', 'https://i.imgur.com/gBUaPbi.jpeg', 'https://i.imgur.com/n5kmutd.jpeg'],
    caption:'Photos: A photo from the engagement, our new private slice of pie in the sky, a BLK LUV gingerbread house from our first Christmas living together.'
  },
  {
    title: "ERA iii",
    altTitle:'Husband & Wife',
    subtitle:'Jumping the Broom',
    description: `Jade and Seka recently tied the knot in an intimate courthouse ceremony to lock down their anniversary date — July 19, the bridge date between Seka’s (June 19) and Jade’s (August 19) birthdays — and get a head start on family planning. They continue to plan a much larger, more festive ceremony to celebrate their love with friends and family. After next year’s wedding, they plan to start a farm resort in East Africa and Jade plans to end The Gift Wars with the ultimate gift to Seka, a basketball team of children.`,
    photos: ['https://i.imgur.com/CgZmQFu.jpeg', 'https://i.imgur.com/9saYAzO.jpeg', 'https://i.imgur.com/9iLumyZ.jpeg'],
    caption:'Photos: All from the courthouse wedding.'
  },
  {
    title: "ERA iv",
    altTitle:'The Future & Beyond',
    subtitle:' A Farming Family',
    description: `A farm resort?! Yes, these two techies are avid gardeners who want out of the rat race and are ready to apply their knowledge to build a business around the literal fruits of their labor. They will share more about their vision and how you can get involved in the process. Feel free to ask them about the process or share any resources on business planning or purchasing land in East Africa. Otherwise, they look forward to seeing you all in 2026!`,
    photos: ['https://i.imgur.com/13miUJs.jpeg', 'https://i.imgur.com/71QE8kE.jpeg', 'https://i.imgur.com/ntMLQzn.jpeg'],
    caption:'Photos: Our mini family (prior to expansion), the fruits of our labor, and a birthday bouquet for Seka made entirely from homegrown flowers.'
  }
];

export default function OurStoryModalContent() {
  const isMobile = useMediaQuery('(max-width:900px)');

  return (
    <Stack sx={isMobile?{display:'flex', width:'95vw'}:{width:'inherit'}}>
      <Typography variant="body1" fontFamily="Tenor Sans" marginBottom={5} gutterBottom> Jade and Seka met the way most millennials meet, dating apps aside, at work. The two developed a strong friendship over the years whose chemistry would cross over and sow the early seeds of a romance. Previous partners and a pandemic initially pulled these star-crossed lovers apart, however, eventually the stars finally aligned for them to make their romance work. </Typography> 
      {eras.map((era, idx) => (
         <>
          <Typography variant="h5" marginBottom={-1} fontFamily="EB Garamond" fontWeight={400} gutterBottom>{era.title}</Typography>
          <Typography variant="h6" marginBottom={-1} fontFamily="EB Garamond" fontWeight={200} gutterBottom>{era.altTitle}</Typography>
          <Typography variant="h7" marginBottom={4} fontFamily="EB Garamond" fontWeight={200} fontStyle='italic' gutterBottom>{era.subtitle}</Typography>
          <Stack direction="row" sx={isMobile?{display:'flex', width:'95vw'}:{}} spacing={2} marginBottom={2} justifyContent="center" flexWrap={'wrap'}>
            {era.photos.map((photo, pIdx) => (
              <img 
              src={photo} 
              alt="" 
              style={isMobile?{
                height:250,
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto'
                }:{height:250}} key={pIdx} />
            ))}
          </Stack>
          <Typography 
                variant="caption" 
                marginBottom={4} 
                sx={isMobile?
                    {display:'flex', 
                    textAlign:'center', 
                    fontFamily:'Tenor Sans'}:
                    {textAlign:'center', 
                    fontFamily:'Tenor Sans'}} 
                gutterBottom>{era.caption}
            </Typography>
          <Typography variant="body1" sx={{ mb: 4, fontFamily:'Tenor Sans', }}>{era.description}</Typography>
          </>
      ))}
    </Stack>
  );
}

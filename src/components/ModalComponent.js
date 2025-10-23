import { useRef, useState, useEffect } from 'react';
import { Modal, useMediaQuery, Typography } from '@mui/material';
import { motion, AnimatePresence, } from 'framer-motion';

const ModalComponent = ({ open, onClose, children, title }) => {
  const contentRef = useRef(null);
  const isDesktop = useMediaQuery('(min-width:1000px)');
  const [hasShadow, setHasShadow] = useState(false);

  // Handler for scroll events inside the modal content
  const handleScroll = (e) => {
    const target = e.target;
    if (!target) return;
    setHasShadow(target.scrollTop > 0);
  };

  // Also add a fallback to check scroll position when component mounts or open changes
  useEffect(() => {
    const el = contentRef.current;
    if (el && el.scrollTop !== undefined) {
      setHasShadow(el.scrollTop > 0);
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <Modal
          open={open}
          onClose={onClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          sx={!isDesktop?{
            display:'flex', 
            width:'95vw',
            alignContent:'center',
            justifyContent:'center',
          }:{} }
        >
          <motion.div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'wrap',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x:-200, transition: { duration: 0.7 } }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className='ovo-regular'
              style={
                isDesktop
                  ? {
                      backgroundColor: '#FDEDF0',
                      padding: '0',
                      height: '100vh',
                      width: '100vw',
                      boxSizing: 'border-box',
                      display: 'flex',
                      flexDirection: 'column',
                    }
                  : {
                      backgroundColor: '#FDEDF0',
                      padding: '0',
                      boxSizing: 'border-box',
                      height: '100vh',
                      width: '100vw',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      margin: 0,
                      position: 'fixed',
                      display: 'flex',
                      flexDirection: 'column',
                    }
              }
               initial={{ scale: 0.8 }}
               animate={{ scale: 1 }}
               exit={{ scale: 0.8 }}
             >
              {/* Header: non-scrolling modal header so it always stays at top */}
              <div
                style={{
                  width: '100%',
                  backgroundColor: '#FDEDF0',
                  boxShadow: hasShadow ? '0 6px 18px rgba(0,0,0,0.12)' : 'none',
                  transition: 'box-shadow 200ms ease-in-out',
                  zIndex: 2,
                  paddingTop: isDesktop ? '20px' : '12px',
                  paddingBottom: '8px',
                  paddingLeft: '10px',
                  paddingRight:'10px',
                  boxSizing: 'border-box',
                  position: 'relative',
                }}
              >
                <Typography
                  sx={{ fontFamily: 'Sekasfont-Regular' }}
                  fontSize={!isDesktop ? '2.6em' : 'auto'}
                  variant="h2"
                  gutterBottom
                  marginTop={5}
                  style={{ margin: 0 }}
                >
                  {title}
                </Typography>
                <button
                  onClick={onClose}
                  className='sekasfont-regular close-button-modal'
                  style={{
                    position: 'absolute',
                    top: isDesktop ? 30 : 20,
                    right: isDesktop ? 25 : 16,
                    zIndex: 100,
                    border: 'none',
                    background: 'none',
                    fontSize: isDesktop ? '3em' : '2em',
                    lineHeight: 1,
                    cursor: 'pointer',
                  }}
                >
                  X
                </button>
              </div>

              {/* Scrollable content area */}
              <div
                ref={contentRef}
                onScroll={handleScroll}
                style={{
                  overflowY: 'auto',
                  flex: 1,
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: isDesktop ? '20px' : '10px',
                }}
              >
                {children}
              </div>
             </motion.div>
           </motion.div>
         </Modal>
       )}
     </AnimatePresence>
   );
 };
 
 export default ModalComponent;

import { useRef } from 'react';
import { Modal, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const ModalComponent = ({ open, onClose, children }) => {
  const contentRef = useRef(null);
  const isDesktop = useMediaQuery('(min-width:1200px)');
  const isTabletOrMobile = useMediaQuery('(max-width:1200px)');

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
          }:{}}
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
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={contentRef}
              className='ovo-regular'
              style={
                isDesktop
                  ? {
                      overflowY: 'auto',
                      backgroundColor: '#FDEDF0',
                      padding: '20px',
                      borderRadius: '8px',
                      height: '500px',
                      width: '70%',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      margin: 'auto',
                      position: 'absolute',
                    }
                  : {
                      overflowY: 'auto',
                      backgroundColor: '#FDEDF0',
                      padding: '10px',
                      borderRadius: 0,
                      height: '100vh',
                      width: '100vw',
                      left: 0,
                      right: 0,
                      top: 0,
                      bottom: 0,
                      margin: 0,
                      position: 'fixed',
                    }
              }
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={onClose}
                className='sekasfont-regular close-button-modal'
                style={{
                  position: 'absolute',
                  top: isDesktop ? 27 : 36,
                  right: isDesktop ? 13 : 29,
                  border: 'none',
                  background: 'none',
                  color: '#0A180F !important',
                  fontSize: isDesktop ? '2.75em' : '2em',
                  lineHeight: 1,
                  cursor: 'pointer',
                }}
              >
                X
              </button>
              {children}
            </motion.div>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default ModalComponent;

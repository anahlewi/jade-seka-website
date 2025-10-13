import { useRef } from 'react';
import { Modal, useMediaQuery } from '@mui/material';
import { motion, AnimatePresence, } from 'framer-motion';

const ModalComponent = ({ open, onClose, children }) => {
  const contentRef = useRef(null);
  const isDesktop = useMediaQuery('(min-width:1000px)');

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
            exit={{ opacity: 0, x:-200, transition: { duration: 0.7 } }} // This defines the "close" animation
            transition={{ duration: 0.3 }} // Adjust transition properties as
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
                      height: '100vh',
                      width: '100vw',
                      boxSizing: 'border-box',
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
                  top: isDesktop ? 45 : 41,
                  right: isDesktop ? 25 : 29,
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
              <div style={{ maxHeight: '100%', overflowY: 'auto', width: '100%' }}>
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

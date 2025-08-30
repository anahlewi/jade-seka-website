import {  useRef } from 'react';
import { Modal } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const ModalComponent = ({ open, onClose, children }) => {
  const contentRef = useRef(null);

  return (
    <AnimatePresence>
      {open && (
        <Modal
          open={open}
          onClose={onClose}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <motion.div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'auto',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={contentRef}
              className='ovo-regular'
              style={{
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
              }}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button onClick={onClose} className='sekasfont-regular' style={{position: 'absolute', top: 27, right: 13, border:'none', background: 'none', fontSize:'2em'}}>X</button>
              {children}
            </motion.div>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default ModalComponent;

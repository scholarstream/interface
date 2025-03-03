import { FC, ReactNode } from 'react';

interface ModalProps {
  children?: ReactNode;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ onClose, children }) => (
  <div
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onClick={onClose} // Close modal when clicking outside
  >
    <div
      style={{
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        position: 'relative',
        minWidth: '300px',
      }}
      onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
    >
      <button
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'none',
          border: 'none',
          fontSize: '16px',
          cursor: 'pointer',
        }}
        onClick={onClose}
      >
        ✖
      </button>
      {children}
    </div>
  </div>
);

export default Modal;

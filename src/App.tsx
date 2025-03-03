import { ConnectButton } from '@rainbow-me/rainbowkit';
import { FC, ReactNode, useState } from 'react';
import BalanceSection from './sections/BalanceSection';
import ActiveStreamsSection from './sections/ActiveStreamsSection';
import HistorySection from './sections/HistorySection';
import Modal from './utils/Modal';

const App: FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const openModal = (content: ReactNode) => {
    setModalContent(content);
    setModalOpen(true);
  };

  return (
    <div
      style={{
        padding: '1rem',
        margin: '0 auto',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1>🎓 ScholarStream</h1>
      <ConnectButton />
      <BalanceSection openModal={openModal} />
      <ActiveStreamsSection openModal={openModal} />
      <HistorySection openModal={openModal} />
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>{modalContent}</Modal>
      )}
    </div>
  );
};

export default App;

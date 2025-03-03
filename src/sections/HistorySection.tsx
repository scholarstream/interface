import NeedWalletConnected from '../utils/NeedWalletConnected';
import { FC, ReactNode } from 'react';
import Table from '../utils/Table';

const HistoryTable: FC = () => (
  <Table
    headers={['Type', 'Address', 'Token', 'Amount', 'Timestamp']}
    data={[
      ['Deposit', '0x9876...', 'USDC', '50', '2025-03-03 12:34:56'],
      ['Withdraw', '0x6543...', 'USDC', '25', '2025-03-02 11:22:33'],
    ]}
  />
);

const HistorySection: FC<{ openModal: (content: ReactNode) => void }> = ({
  openModal,
}) => (
  <NeedWalletConnected title="📖 HISTORY">
    <h3>History</h3>
    <button
      onClick={() => openModal(<p>This is a modal content from History</p>)}
    >
      Open Modal in History
    </button>

    <HistoryTable />
  </NeedWalletConnected>
);

export default HistorySection;

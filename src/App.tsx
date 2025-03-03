import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { FC, ReactNode, useState } from 'react';

interface NeedWalletConnectedProps {
  children?: ReactNode;
  title: string;
}

const NeedWalletConnected: FC<NeedWalletConnectedProps> = ({
  title,
  children,
}) => {
  const { isConnected } = useAccount();
  return (
    <div>
      <hr />
      <h2>{title}</h2>
      {isConnected ? children : <p>Please connect your wallet.</p>}
    </div>
  );
};

const BalanceSection: FC<{ openModal: (content: ReactNode) => void }> = ({
  openModal,
}) => (
  <NeedWalletConnected title="📊 BALANCES">
    <h3>Deposit Token:</h3>
    <button
      onClick={() => openModal(<p>This is a modal content from Balance</p>)}
    >
      Open Modal in Balance
    </button>

    <Form
      fields={[
        { label: 'Token', placeholder: 'Enter Token' },
        { label: 'Amount', placeholder: 'Enter Amount' },
      ]}
      submitText="Deposit"
    />
    <hr />
    <h3>Token Balances</h3>
    <Table
      headers={['Token', 'Balance', 'To Depleted', 'Monthly Cost', 'Actions']}
      data={[
        [
          'USDC',
          '15.51411',
          '10.86 days',
          '42.85714 USDC',
          <span>
            <button>Top Up</button> <button>Withdraw</button>
          </span>,
        ],
      ]}
    />
  </NeedWalletConnected>
);

const ActiveStreamsSection: FC<{
  openModal: (content: ReactNode) => void;
}> = ({ openModal }) => (
  <NeedWalletConnected title="📜 ACTIVE STREAMS">
    <h3>Create Stream:</h3>
    <button
      onClick={() =>
        openModal(<p>This is a modal content from ActiveStream</p>)
      }
    >
      Open Modal in ActiveStream
    </button>

    <Form
      fields={[
        { label: 'Payee', placeholder: 'Payee Address' },
        { label: 'Token', placeholder: 'Enter Token' },
        { label: 'Amount/sec', placeholder: 'Enter Amount' },
      ]}
      submitText="Create Stream"
    />
    <hr />
    <h3>Active Streams</h3>
    <StreamsTable />
  </NeedWalletConnected>
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
      <button
        onClick={() => openModal(<p>This is a modal content from App</p>)}
      >
        Open Modal in App
      </button>
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

interface FormProps {
  fields: { label: string; placeholder: string }[];
  submitText: string;
}

const Form: FC<FormProps> = ({ fields, submitText }) => (
  <form>
    {fields.map((field, index) => (
      <div key={index} style={{ marginBottom: '10px' }}>
        <label>{field.label}</label>
        <br />
        <input type="text" placeholder={field.placeholder} />
        <br />
      </div>
    ))}
    <button type="submit">{submitText}</button>
  </form>
);

interface TableProps {
  headers: string[];
  data: (ReactNode | string)[][];
}

const Table: FC<TableProps> = ({ headers, data }) => (
  <table border={1}>
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

const StreamsTable: FC = () => (
  <Table
    headers={[
      'Flow',
      'Payer',
      'Payee',
      'Token',
      'Amount/sec',
      'Total Streamed',
      'Withdrawable',
      'Actions',
    ]}
    data={[
      [
        'Outgoing',
        '0x1234...',
        '0x5678...',
        'USDC',
        '0.01',
        '4.48589',
        '2.345',
        <span>
          <button>Send</button> <button>Cancel Stream</button>
        </span>,
      ],
      [
        'Incoming',
        '0x8765...',
        '0x4321...',
        'USDC',
        '0.02',
        '10.85714',
        '5.678',
        <span>
          <button>Send</button> <button>Cancel Stream</button>
        </span>,
      ],
    ]}
  />
);

const HistoryTable: FC = () => (
  <Table
    headers={['Type', 'Address', 'Token', 'Amount', 'Timestamp']}
    data={[
      ['Deposit', '0x9876...', 'USDC', '50', '2025-03-03 12:34:56'],
      ['Withdraw', '0x6543...', 'USDC', '25', '2025-03-02 11:22:33'],
    ]}
  />
);

export default App;

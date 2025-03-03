import Form from '../utils/Form';
import NeedWalletConnected from '../utils/NeedWalletConnected';
import { FC, ReactNode } from 'react';
import Table from '../utils/Table';

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

const CreateStreamModal: FC = () => (
  <div>
    <h3>Create Stream</h3>
    <Form
      fields={[
        { label: 'Payee', placeholder: 'Payee Address' },
        { label: 'Token', placeholder: 'Enter Token' },
        { label: 'Amount/sec', placeholder: 'Enter Amount' },
      ]}
      submitText="Create Stream"
    />
  </div>
);

const ActiveStreamsSection: FC<{
  openModal: (content: ReactNode) => void;
}> = ({ openModal }) => {
  const createStreamButton = (
    <button onClick={() => openModal(<CreateStreamModal />)}>
      Create Stream
    </button>
  );
  return (
    <NeedWalletConnected title="📜 ACTIVE STREAMS">
      {createStreamButton}
      <StreamsTable />
    </NeedWalletConnected>
  );
};

export default ActiveStreamsSection;

import Form from '../utils/Form';
import NeedWalletConnected from '../utils/NeedWalletConnected';
import { FC, ReactNode } from 'react';
import Table from '../utils/Table';

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

export default BalanceSection;

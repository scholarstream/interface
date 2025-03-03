import Form from '../utils/Form';
import NeedWalletConnected from '../utils/NeedWalletConnected';
import { FC, ReactNode } from 'react';
import Table from '../utils/Table';

const DepositTokenModal: FC = () => (
  <div>
    <h3>Deposit Token</h3>
    <Form
      fields={[
        { label: 'Token', placeholder: 'Enter Token' },
        { label: 'Amount', placeholder: 'Enter Amount' },
      ]}
      submitText="Deposit"
    />
  </div>
);

const TopUpModal: FC = () => (
  <div>
    <h3>Top Up</h3>
    <Form
      fields={[{ label: 'Amount', placeholder: 'Enter Amount' }]}
      submitText="Top Up"
    />
  </div>
);

const WithdrawModal: FC = () => (
  <div>
    <h3>Withdraw</h3>
    <Form
      fields={[{ label: 'Amount', placeholder: 'Enter Amount' }]}
      submitText="Withdraw"
    />
  </div>
);

const BalanceSection: FC<{ openModal: (content: ReactNode) => void }> = ({
  openModal,
}) => {
  const depositButton = (
    <button onClick={() => openModal(<DepositTokenModal />)}>
      Deposit Token
    </button>
  );

  const topUpButton = (
    <button onClick={() => openModal(<TopUpModal />)}>Top Up</button>
  );

  const withdrawButton = (
    <button onClick={() => openModal(<WithdrawModal />)}>Withdraw</button>
  );

  return (
    <NeedWalletConnected title="📊 BALANCES">
      {depositButton}
      <Table
        headers={['Token', 'Balance', 'To Depleted', 'Monthly Cost', 'Actions']}
        data={[
          [
            'USDC',
            '15.51411',
            '10.86 days',
            '42.85714 USDC',
            <span>
              {topUpButton} - {withdrawButton}
            </span>,
          ],
        ]}
      />
    </NeedWalletConnected>
  );
};

export default BalanceSection;

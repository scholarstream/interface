import { useAccount } from 'wagmi';
import { FC, ReactNode } from 'react';

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

export default NeedWalletConnected;

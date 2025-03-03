import { ConnectButton } from '@rainbow-me/rainbowkit';
import { WagmiProvider, useAccount } from 'wagmi'

function NeedWalletConnected({ title, children }) {
    const { isConnected } = useAccount();
    return <div>
      <hr />
      <h2>{title}</h2>
      {isConnected ? children : <p>Please connect your wallet.</p>}
    </div>
}

function BalanceSection() {
    return <NeedWalletConnected title="📊 BALANCES">
      <h3>Deposit Token:</h3>
      <Form
        fields={[
          { label: "Token", placeholder: "Enter Token" },
          { label: "Amount", placeholder: "Enter Amount" }
        ]}
        submitText="Deposit"
      />
      
      <hr />
      
      <h3>Token Balances</h3>
      <Table
        headers={["Token", "Balance", "To Depleted", "Monthly Cost", "Actions"]}
        data={[
          [
            "USDC", "15.51411", "10.86 days", "42.85714 USDC", 
            <span><button>Top Up</button> <button>Withdraw</button></span>
          ]
        ]}
      />
    </NeedWalletConnected>
}

function ActiveStreamsSection() {
    return <NeedWalletConnected title="📜 ACTIVE STREAMS">
      <h3>Create Stream:</h3>
      <Form
        fields={[
          { label: "Payee", placeholder: "Payee Address" },
          { label: "Token", placeholder: "Enter Token" },
          { label: "Amount/sec", placeholder: "Enter Amount" }
        ]}
        submitText="Create Stream"
      />
      
      <hr />
      
      <h3>Active Streams</h3>
      <StreamsTable />
    </NeedWalletConnected>
}

function HistorySection() {
    return <NeedWalletConnected title="📖 HISTORY">
      <h3>History</h3>
      <HistoryTable />
    </NeedWalletConnected>
}

function App() {
  return (
    <div style={{ padding: '1rem', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      {/* Header & Wallet */}
      <h1>🎓 ScholarStream</h1>
      <ConnectButton />
      
      <BalanceSection />
      <ActiveStreamsSection />
      <HistorySection/>
    </div>
  );
}

function Form({ fields, submitText }) {
  return (
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
}

function Table({ headers, data }) {
  return (
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
}

function StreamsTable() {
  return (
    <Table
      headers={["Flow", "Payer", "Payee", "Token", "Amount/sec", "Total Streamed", "Withdrawable", "Actions"]}
      data={[
        ["Outgoing", "0x1234...", "0x5678...", "USDC", "0.01", "4.48589", "2.345", <span><button>Send</button> <button>Cancel Stream</button></span>],
        ["Incoming", "0x8765...", "0x4321...", "USDC", "0.02", "10.85714", "5.678", <span><button>Send</button> <button>Cancel Stream</button></span>]
      ]}
    />
  );
}

function HistoryTable() {
  return (
    <Table
      headers={["Type", "Address", "Token", "Amount", "Timestamp"]}
      data={[
        ["Deposit", "0x9876...", "USDC", "50", "2025-03-03 12:34:56"],
        ["Withdraw", "0x6543...", "USDC", "25", "2025-03-02 11:22:33"]
      ]}
    />
  );
}

export default App;


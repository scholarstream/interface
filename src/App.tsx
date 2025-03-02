function App() {
  return (
    <div>
      {/* Header */}
      <h1>🎓 ScholarStream UI</h1>

      {/* Wallet Connection */}
      <button>Connect Wallet</button>
      <p>Wallet: 0x1234...abcd <button>Disconnect</button></p>

      {/* Dashboard */}
      <h2>📊 Dashboard</h2>
      <ul>
        <li>🔹 Effective Balance: 100.5 USDC</li>
        <li>🔹 Direct Balance: 50.0 USDC</li>
        <li>🔹 Vault Balance: 50.5 USDC</li>
        <li>🔹 Streams Created: 2</li>
        <li>🔹 Incoming Streams: 1</li>
      </ul>

      {/* Deposit Funds */}
      <h2>📥 Deposit Funds</h2>
      <input type="text" placeholder="Enter Amount (USDC)" />
      <input type="text" placeholder="% to Vault" />
      <button>Deposit</button>

      {/* Create a Stream */}
      <h2>🔄 Create a Stream</h2>
      <input type="text" placeholder="Payee Address" />
      <input type="text" placeholder="Amount per sec (USDC)" />
      <button>Create Stream</button>

      {/* Withdraw Funds */}
      <h2>💰 Withdraw Funds</h2>
      <select>
        <option>Select Payer</option>
        <option value="0xPayer1">0xPayer1</option>
        <option value="0xPayer2">0xPayer2</option>
      </select>
      <input type="text" placeholder="Amount per sec (USDC)" />
      <button>Withdraw</button>

      {/* Cancel Stream */}
      <h2>❌ Cancel Stream</h2>
      <select>
        <option>Select Stream</option>
        <option value="0xRecipient1">0xRecipient1 - 0.01 USDC/sec</option>
        <option value="0xRecipient2">0xRecipient2 - 0.02 USDC/sec</option>
      </select>
      <button>Cancel Stream</button>

      {/* Active Streams */}
      <h2>📜 Active Streams</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Amount/sec</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0x1234...</td>
            <td>0x5678...</td>
            <td>0.01 USDC</td>
            <td>✅ Active</td>
          </tr>
          <tr>
            <td>0x8765...</td>
            <td>0x4321...</td>
            <td>0.02 USDC</td>
            <td>❌ Canceled</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;


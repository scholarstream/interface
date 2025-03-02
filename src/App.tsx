function App() {
  return (
    <div>
      {/* Header & Wallet */}
      <h1>🎓 ScholarStream</h1>
      <button>Connect Wallet</button>
      <p>Wallet: 0x1234...abcd <button>Disconnect</button></p>

      {/* Balances Section */}
      <h2>📊 Balances</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Token</th>
            <th>Balance</th>
            <th>To Depleted</th>
            <th>Monthly Cost</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>USDC (Arbitrum)</td>
            <td>15.51411</td>
            <td>10.86 days</td>
            <td>42.85714 USDC</td>
          </tr>
        </tbody>
      </table>
      <button>Deposit New Token</button>
      <button>Withdraw</button>
      <button>Top Up</button>

      {/* Payer Actions */}
      <h2>🟢 Payer Actions</h2>
      <h3>📥 Deposit Funds</h3>
      <input type="text" placeholder="Enter Amount (USDC)" />
      <input type="text" placeholder="% to Vault" />
      <button>Deposit</button>

      <h3>🔄 Create a Stream</h3>
      <input type="text" placeholder="Payee Address" />
      <input type="text" placeholder="Amount per sec (USDC)" />
      <button>Create Stream</button>

      <h3>⚙ Manage Streams</h3>
      <select>
        <option>Select Stream</option>
        <option value="0xRecipient1">0xRecipient1 - 0.01 USDC/sec</option>
      </select>
      <button>Modify</button>
      <button>Pause</button>
      <button>Schedule</button>
      <button>Cancel</button>

      {/* Payee Actions */}
      <h2>🔵 Payee Actions</h2>
      <h3>💰 Withdraw Funds</h3>
      <select>
        <option>Select Payer</option>
        <option value="0xPayer1">0xPayer1</option>
      </select>
      <input type="text" placeholder="Amount per sec (USDC)" />
      <button>Withdraw</button>

      {/* Shared Streams Table */}
      <h2>📜 Active Streams</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>From (Payer)</th>
            <th>To (Payee)</th>
            <th>Amount/sec</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0x1234...</td>
            <td>0x5678...</td>
            <td>0.01 USDC</td>
            <td>✅ Active</td>
            <td><button>Withdraw</button></td>
          </tr>
          <tr>
            <td>0x8765...</td>
            <td>0x4321...</td>
            <td>0.02 USDC</td>
            <td>❌ Canceled</td>
            <td></td>
          </tr>
        </tbody>
      </table>

      {/* History Section */}
      <h2>📜 Transaction History</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>Action</th>
            <th>Type</th>
            <th>Address / Name</th>
            <th>Amount</th>
            <th>Age</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Withdraw</td>
            <td>dims</td>
            <td>0x2156...7477</td>
            <td>0.00736 USDC</td>
            <td>3 days ago</td>
            <td><button>Invoice</button></td>
          </tr>
          <tr>
            <td>Receive Stream</td>
            <td>You</td>
            <td>0x2156...7477</td>
            <td>42.85714 USDC/mo</td>
            <td>3 days ago</td>
            <td><button>Details</button></td>
          </tr>
        </tbody>
      </table>
      <button>Export CSV</button>
    </div>
  );
}

export default App;


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
      <StreamsTable />
    </div>
  );
}

function StreamsTable() {
  return (
    <div>
      <h2>📜 Active Streams</h2>
      <table border={1}>
        <thead>
          <tr>
            <th>From (Payer)</th>
            <th>To (Payee)</th>
            <th>Token</th>
            <th>Amount/sec</th>
            <th>Total Streamed</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0x1234...</td>
            <td>0x5678...</td>
            <td>USDC</td>
            <td>0.01 USDC</td>
            <td>4.48589</td>
            <td>
              <button>✏ Modify</button>
            </td>
          </tr>
          <tr>
            <td>0x8765...</td>
            <td>0x4321...</td>
            <td>USDC</td>
            <td>0.02 USDC</td>
            <td>10.85714</td>
            <td>
              <button>⏸ Pause</button>
            </td>
          </tr>
          <tr>
            <td>0x7890...</td>
            <td>0x2468...</td>
            <td>USDC</td>
            <td>0.05 USDC</td>
            <td>20.56321</td>
            <td>
              <button>📅 Schedule</button>
              <button>❌ Cancel</button>
            </td>
          </tr>
          <tr>
            <td>0xABCD...</td>
            <td>0xEFGH...</td>
            <td>USDC</td>
            <td>0.03 USDC</td>
            <td>15.48589</td>
            <td>
              <button>💰 Withdraw</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


export default App;


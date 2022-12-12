import React from 'react';
import { useState } from 'react';

const WalletInterface = () => {
  const [ownerAddress, setOwnerAddress] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('');
  const [transferAmount, setTransferAmount] = useState(0);
  const [withdrawAmount, setWithdrawAmount] = useState(0);

  // Initialize contract instance and set owner address
  const contractInstance = new Wallet();
  contractInstance.owner = ownerAddress;

  // Function to handle transfer
  const handleTransfer = () => {
    contractInstance.transfer(recipientAddress, transferAmount);
  }

  // Function to handle withdraw
  const handleWithdraw = () => {
    contractInstance.withdraw(withdrawAmount);
  }

  return (
    <div>
      <h1>Wallet Interface</h1>
      <label>Owner Address:</label>
      <input
        type="text"
        value={ownerAddress}
        onChange={(e) => setOwnerAddress(e.target.value)}
      />
      <br />
      <label>Recipient Address:</label>
      <input
        type="text"
        value={recipientAddress}
        onChange={(e) => setRecipientAddress(e.target.value)}
      />
      <br />
      <label>Transfer Amount:</label>
      <input
        type="number"
        value={transferAmount}
        onChange={(e) => setTransferAmount(e.target.value)}
      />
      <button onClick={handleTransfer}>Transfer</button>
      <br />
      <label>Withdraw Amount:</label>
      <input
        type="number"
        value={withdrawAmount}
        onChange={(e) => setWithdrawAmount(e.target.value)}
      />
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
}

export default WalletInterface;

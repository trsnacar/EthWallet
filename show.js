import React from 'react';
import { useState } from 'react';

const Show = () => {
  const [ownerAddress, setOwnerAddress] = useState('');

  // Initialize contract instance and set owner address
  const contractInstance = new Wallet();
  contractInstance.owner = ownerAddress;

  return (
    <div>
      <h1>Wallet Information</h1>
      <label>Owner Address:</label>
      <input
        type="text"
        value={ownerAddress}
        onChange={(e) => setOwnerAddress(e.target.value)}
      />
      <br />
      <label>Contract Balance:</label>
      <p>{contractInstance.balance}</p>
      <br />
      <label>Owner Balance:</label>
      <p>{contractInstance.owner.balance}</p>
    </div>
  );
}

export default Show;

import Wallet from './Wallet.sol';

// Initialize contract instance and set owner address
const contractInstance = new Wallet();
contractInstance.owner = '0x1234567890';

// Test transfer function
contractInstance.transfer('0x0987654321', 100);

// Check if transfer was successful
if (contractInstance.owner.balance === 900 && contractInstance.balance === 100) {
  console.log('Transfer function successful');
} else {
  console.error('Transfer function failed');
}

// Test withdraw function
contractInstance.withdraw(50);

// Check if withdraw was successful
if (contractInstance.owner.balance === 950 && contractInstance.balance === 50) {
  console.log('Withdraw function successful');
} else {
  console.error('Withdraw function failed');
}

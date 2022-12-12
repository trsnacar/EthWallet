# EthWallet
With this contract, you can get ETH from anyone, but no one else can withdraw from you.
The contract is a simple wallet contract that allows the owner to manage their funds and make transfers to other addresses. The contract has two main functions: transfer and withdraw.

The transfer function allows the owner to send funds to a specified recipient address. It takes in two parameters: the address of the recipient and the amount of funds to be transferred. The function checks that the sender of the transaction is the owner of the contract, and then sends the specified amount of funds to the recipient.

The withdraw function allows the owner to withdraw funds from the contract and send them to their own address. It takes in a parameter: the amount of funds to be withdrawn. The function checks that the sender of the transaction is the owner of the contract, and then sends the specified amount of funds to the owner's address.

Overall, the contract provides a simple and secure way for the owner to manage their funds and make transfers to other addresses.

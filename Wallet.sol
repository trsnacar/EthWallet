pragma solidity ^0.5.0;

contract Wallet {
    address public owner;

    constructor() public {
        owner = msg.sender;
    }

    function transfer(address payable _to, uint256 _value) public {
        require(msg.sender == owner, "Only the owner can make transfers.");
        _to.transfer(_value);
    }

    function withdraw(uint256 _value) public {
        require(msg.sender == owner, "Only the owner can withdraw funds.");
        msg.sender.transfer(_value);
    }
}

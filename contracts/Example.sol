pragma solidity ^0.5.0;

contract Example {
  event ValueChanged(
    address indexed author,
    uint256 indexed oldValue,
    uint256 indexed newValue
  );

  uint256 public value;

  function setValue(uint256 _value) public {
    emit ValueChanged(msg.sender, value, _value);
    value = _value;

  }

  function testBoom() internal pure {
    revert("Boom!");
  }
}

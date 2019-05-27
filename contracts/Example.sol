pragma solidity ^0.5.0;

contract Example {
  event ValueChanged(
    address indexed author,
    uint256 oldValue,
    uint256 newValue
  );
  uint256 public value;

  string test = "test";

  function setValue(uint256 _value) public {
    uint256 oldValue = value;
    value = _value;
    emit ValueChanged(msg.sender, oldValue, _value);
  }

  function testBoom() internal pure {
    revert("Boom!");
  }
}

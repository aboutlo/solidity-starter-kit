pragma solidity ^0.5.0;

contract Example {
  uint public value;
  string test = "test";

  function setValue(uint256 _value) public {
    // test test
    value = _value;
  }

  function testBoom() internal pure {
    revert("Boom!");
  }
}

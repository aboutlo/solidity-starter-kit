pragma solidity ^0.5.0;

contract Example {
  uint public value;
  string public name;
  string test = "test";

  function setValue(uint256 _value) public {
    // test test
    value = _value;
  }

  function setName(string memory _name) public {
    name = _name;
  }

  function testBoom() internal pure {
    revert("Boom!");
  }
}

const Example = artifacts.require('Example')

contract('Example', async accounts => {
  let owner = null

  beforeEach(() => {
    // eslint-disable-next-line no-extra-semi
    ;[owner] = accounts
  })

  it('gets default value', async () => {
    const contract = await Example.deployed()
    const value = await contract.value.call()
    assert.equal(value.toNumber(), 0, "0 wasn't the default value")
  })

  it('sets a value', async () => {
    const contract = await Example.deployed()
    const mockValue = 5
    await contract.setValue(mockValue, { from: owner })
    const value = await contract.value.call()
    assert.equal(
      value.toNumber(),
      mockValue,
      `${mockValue} wasn't the return value instead got ${value}`
    )
  })
})

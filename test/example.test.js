const Example = artifacts.require('Example')

contract('Example', async accounts => {
  let owner = null

  beforeEach(() => {
    // eslint-disable-next-line no-extra-semi
    ;[owner] = accounts
  })

  describe('value', () => {
    let contract

    beforeEach(async () => {
      contract = await Example.deployed()
    })

    it('gets default value', async () => {
      const value = await contract.value.call()
      assert.equal(value.toNumber(), 0, "0 wasn't the default value")
    })

    it('sets a value', async () => {
      const mockValue = 5
      await contract.setValue(mockValue, { from: owner })
      const value = await contract.value.call()
      assert.equal(
        value.toNumber(),
        mockValue,
        `${mockValue} wasn't the return value instead got ${value}`
      )
    })

    it('emits an event', async () => {
      const mockValue = 10
      await contract.setValue(0, { from: owner })

      const tx = await contract.setValue(mockValue, { from: owner })
      const [event] = tx.logs
      const { author, oldValue, newValue } = event.args

      assert.equal(author, owner, 'Owner is wrong')
      assert.equal(oldValue.toNumber(), 0, 'oldValue is wrong')
      assert.equal(newValue.toNumber(), mockValue, 'newValue is wrong')
    })
  })
})

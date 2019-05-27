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
      expect(value.toNumber()).equal(0)
    })

    it('sets a value', async () => {
      const mockValue = 5
      await contract.setValue(mockValue, { from: owner })
      const value = await contract.value.call()
      expect(value.toNumber()).to.equal(mockValue)
    })

    it('emits an event', async () => {
      const mockValue = 10
      const defaultValue = 0

      await contract.setValue(defaultValue, { from: owner })
      const value = await contract.value.call()

      expect(value.toNumber()).to.equal(defaultValue)

      const tx = await contract.setValue(mockValue, { from: owner })
      const [valueChangedLog] = tx.logs.filter(e => e.event === 'ValueChanged')
      const { author, oldValue, newValue } = valueChangedLog.args

      expect(author).to.equal(owner)
      expect(oldValue.toNumber()).to.equal(defaultValue)
      expect(newValue.toNumber()).to.equal(mockValue)
    })
  })
})

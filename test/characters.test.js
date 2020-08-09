const chai = require('chai')
chai.use(require('chai-json-schema'))
const { assert } = chai

const characters = require('../src/characters')

describe('characters', () => {
  const characterSchema = {
    title: 'character schema',
    type: 'object',
    required: ['id', 'name', 'maxStar', 'hasSpecialEquipment'],
    properties: {
      id: {
        type: 'string',
      },
      name: {
        type: 'string',
      },
      maxStar: {
        type: 'number',
        minimum: 5,
        maximum: 6,
      },
      hasSpecialEquipment: {
        type: 'boolean',
      },
    },
  }

  it('follows a schema', () => {
    assert.isArray(characters)
    for (const character of characters) {
      assert.jsonSchema(character, characterSchema)
    }
  })

  describe('id', () => {
    it('is unique', () => {
      characters.forEach((c, idx) => {
        assert.isFalse(
          characters.some((c2, idx2) => c.id === c2.id && idx !== idx2),
          `found duplicated ids: ${c.id}`,
        )
      })
    })
  })

  describe('name', () => {
    it('is unique', () => {
      characters.forEach((c, idx) => {
        assert.isFalse(
          characters.some((c2, idx2) => c.name === c2.name && idx !== idx2),
          `found duplicated names: ${c.name}`,
        )
      })
    })
  })
})

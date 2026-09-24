import test from 'node:test'
import assert from 'node:assert/strict'
import { addItem, decrementItem, removeItem, countItems, totalCents, formatPrice } from './cart.js'

const jeans = { id: 1, name: 'Jeans', price: 19.99 }
const shirt = { id: 2, name: 'Shirt', price: 29.99 }

test('adding the same product twice increases quantity instead of duplicating', () => {
    const items = addItem(addItem([], jeans), jeans)
    assert.equal(items.length, 1)
    assert.equal(items[0].quantity, 2)
})

test('addItem does not mutate the previous state', () => {
    const before = addItem([], jeans)
    const snapshot = structuredClone(before)
    addItem(before, jeans)
    assert.deepEqual(before, snapshot)
})

test('decrementItem removes the line when quantity reaches zero', () => {
    let items = addItem(addItem(addItem([], jeans), jeans), shirt)
    items = decrementItem(items, 1)
    assert.equal(items.find((i) => i.id === 1).quantity, 1)
    items = decrementItem(items, 1)
    assert.equal(items.find((i) => i.id === 1), undefined)
    assert.equal(items.length, 1)
})

test('removeItem drops a line regardless of quantity', () => {
    const items = removeItem(addItem(addItem([], jeans), jeans), 1)
    assert.deepEqual(items, [])
})

test('countItems sums quantities, not lines', () => {
    const items = addItem(addItem(addItem([], jeans), jeans), shirt)
    assert.equal(countItems(items), 3)
})

test('totalCents is exact for decimal prices', () => {
    const items = addItem(addItem(addItem([], jeans), jeans), shirt)
    assert.equal(totalCents(items), 1999 * 2 + 2999)
    assert.equal(formatPrice(totalCents(items) / 100), '$69.97')
    assert.equal(totalCents([]), 0)
})

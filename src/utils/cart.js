// Pure cart helpers, kept free of React so they can be unit tested with `node --test`.

export const addItem = (items, product) => {
    const existing = items.find((item) => item.id === product.id)
    if (existing) {
        return items.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
    }
    return [...items, { id: product.id, name: product.name, price: product.price, quantity: 1 }]
}

export const decrementItem = (items, id) =>
    items
        .map((item) => (item.id === id ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)

export const removeItem = (items, id) => items.filter((item) => item.id !== id)

export const countItems = (items) => items.reduce((sum, item) => sum + item.quantity, 0)

// Sum in integer cents to avoid floating point drift (0.1 + 0.2 !== 0.3).
export const totalCents = (items) =>
    items.reduce((sum, item) => sum + Math.round(item.price * 100) * item.quantity, 0)

export const formatPrice = (amount) => `$${amount.toFixed(2)}`

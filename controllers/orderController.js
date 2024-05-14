const Order = require('../models/orderModel');

const componentsData = {
    A: { name: 'LED Screen', price: 10.28 },
    B: { name: 'OLED Screen', price: 24.07 },
    C: { name: 'AMOLED Screen', price: 33.30 },
    D: { name: 'Wide-Angle Camera', price: 25.94 },
    E: { name: 'Ultra-Wide-Angle Camera', price: 32.39 },
    F: { name: 'USB-C Port', price: 18.77 },
    G: { name: 'Micro-USB Port', price: 15.13 },
    H: { name: 'Lightning Port', price: 20.00 },
    I: { name: 'Android OS', price: 42.31 },
    J: { name: 'iOS OS', price: 45.00 },
    K: { name: 'Metallic Body', price: 45.00 },
    L: { name: 'Plastic Body', price: 30.00 },
};

const createOrder = (req, res) => {
    const { components } = req.body;
    if (!components || components.length !== 5) {
        return res.status(400).json({ error: 'Invalid components list' });
    }

    const orderParts = components.map((code) => {
        const componentData = componentsData[code];
        if (!componentData) return null;
        return {
            name: componentData.name,
            price: componentData.price,
        };
    });

    const total = orderParts.reduce((acc, part) => acc + part.price, 0);
    const order = new Order({ parts: orderParts, total });
    global.orders.push(order); // Store the order in the global variable
    return res.status(201).json({ order_id: order.id, total: order.total, parts: order.parts });
};

const getAllOrders = (req, res) => {
    const orders = global.orders.map((order) => ({
        order_id: order.id,
        total: order.total,
        parts: order.parts,
    }));
    return res.status(200).json(orders);
};

module.exports = { createOrder, getAllOrders };

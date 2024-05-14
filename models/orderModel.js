class Order {
    constructor({ parts, total }) {
        this.id = Math.random().toString(36).substr(2, 9);
        this.parts = parts;
        this.total = total;
    }
}

module.exports = Order;

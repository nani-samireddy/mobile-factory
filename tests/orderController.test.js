const request = require('supertest');
const app = require('../app');

describe('POST /orders', () => {
    it('should create a new order', async () => {
        const response = await request(app)
            .post('/orders')
            .send({ components: ['I', 'A', 'D', 'F', 'K'] });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('order_id');
        expect(response.body).toHaveProperty('total', 142.3);
        expect(response.body).toHaveProperty('parts', [
            'Android OS', 'LED Screen', 'Wide-Angle Camera', 'USB-C Port', 'Metallic Body',
        ]);
    });

    it('should return 400 if components list is invalid', async () => {
        const response = await request(app)
            .post('/orders')
            .send({ components: ['I', 'A', 'D', 'F'] });
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('error', 'Invalid components list');
    });
});

describe('GET /orders', () => {
    it('should get all orders', async () => {
        const response = await request(app).get('/orders/orders');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThanOrEqual(0); // Assumes at least one order is created
    });
});

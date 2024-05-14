# Mobile Factory API

The Mobile Factory API allows you to create, manage, and fetch orders for configurable mobile phones. This README provides detailed information on how to install, test, and use the API, including endpoint details, parameters, and examples.

## Installation

Follow these steps to set up and run the Mobile Factory API:

1. Clone the repository:

```bash
git clone https://github.com/your-username/mobile-factory.git
```

2. Navigate to the project directory:

```bash
cd mobile-factory
```

3. Install dependencies:

```bash
npm install
```

## Testing

The API includes unit tests to ensure its functionality. To run the tests, use the following command:

```bash
npm test
```

## Usage

### API Endpoints

#### POST /orders

Create a new order for a mobile phone.

**Request Body:**

```json
{
  "components": ["I", "A", "D", "F", "K"]
}
```

- `"components"`: An array containing component codes for the order. It must contain exactly 5 valid component codes (e.g., "I" for Android OS, "A" for LED Screen, etc.).

**Response:**

```json
{
  "order_id": "some-id",
  "total": 142.3,
  "parts": [
    "Android OS",
    "LED Screen",
    "Wide-Angle Camera",
    "USB-C Port",
    "Metallic Body"
  ]
}
```

#### GET /orders

Fetch all orders.

**Response:**

```json
[
  {
    "order_id": "some-id",
    "total": 142.3,
    "parts": [
      "Android OS",
      "LED Screen",
      "Wide-Angle Camera",
      "USB-C Port",
      "Metallic Body"
    ]
  },
  {
    "order_id": "another-id",
    "total": 155.5,
    "parts": [
      "iOS OS",
      "OLED Screen",
      "Ultra-Wide-Angle Camera",
      "Lightning Port",
      "Plastic Body"
    ]
  }
]
```

### Parameters

- `"order_id"`: Unique identifier for the order.
- `"total"`: Total price of the order.
- `"parts"`: Array of components included in the order.

### Examples

#### Create a New Order

**Request:**

```bash
curl -X POST http://localhost:3000/orders -H "Content-Type: application/json" -d '{ "components": ["I", "A", "D", "F", "K"] }'
```

**Response:**

```json
{
  "order_id": "some-id",
  "total": 142.3,
  "parts": [
    "Android OS",
    "LED Screen",
    "Wide-Angle Camera",
    "USB-C Port",
    "Metallic Body"
  ]
}
```

#### Fetch All Orders

**Request:**

```bash
curl http://localhost:3000/orders
```

**Response:**

```json
[
  {
    "order_id": "some-id",
    "total": 142.3,
    "parts": [
      "Android OS",
      "LED Screen",
      "Wide-Angle Camera",
      "USB-C Port",
      "Metallic Body"
    ]
  },
  {
    "order_id": "another-id",
    "total": 155.5,
    "parts": [
      "iOS OS",
      "OLED Screen",
      "Ultra-Wide-Angle Camera",
      "Lightning Port",
      "Plastic Body"
    ]
  }
]
```

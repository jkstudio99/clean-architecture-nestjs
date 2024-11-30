
# **Order and Product Management API**

This project is a full-stack **NestJS** application designed to manage orders and products. It leverages **Prisma** as the ORM for database management, follows the **clean architecture pattern**, and includes **Swagger** for API documentation.

---

## **Features**
- CRUD operations for **Orders** and **Products**.
- **Swagger** integration for API exploration and testing.
- Clean architecture for maintainability and scalability.
- **Prisma ORM** for database interaction.

---

## **Project Structure**
This project follows a modular and clean architecture. Below is a simplified structure:

```plaintext
src/
├── application/            # Application-specific logic
│   ├── dto/                # Data Transfer Objects (Request & Response)
│   │   ├── request/
│   │   └── response/
│   └── services/           # Business logic for Orders and Products
├── domain/                 # Core business logic
│   ├── entities/           # Entities for domain models
│   └── repositories/       # Repository interfaces
├── infrastructure/         # Infrastructure implementations (Prisma)
│   ├── prisma/             # Prisma client
│   └── repositories/       # Repository implementations
└── interface/              # HTTP layer
    ├── controllers/        # REST API controllers
    └── http/
```

---

## **Getting Started**

### **Prerequisites**
- Node.js v18+ (latest LTS recommended)
- npm v9+
- MySQL database (or other Prisma-supported database)

---

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-repo/order-product-app.git
   cd order-product-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Prisma**
   - Create a `.env` file in the root directory and add the following:
     ```env
     DATABASE_URL="mysql://user:password@localhost:3306/order_product_db"
     ```
   - Initialize Prisma and generate the client:
     ```bash
     npx prisma migrate dev --name init
     npx prisma generate
     ```

4. **Run the application**
   ```bash
   npm run start:dev
   ```

---

### **API Documentation**

The API documentation is automatically generated using **Swagger**. After starting the application, navigate to:

```
http://localhost:3000/api
```

---

## **Available Endpoints**

### **Order Endpoints**
- `GET /orders` - Retrieve all orders.
- `GET /orders/:id` - Retrieve a single order by ID.
- `POST /orders` - Create a new order.
- `PATCH /orders/:id` - Update an order.
- `DELETE /orders/:id` - Delete an order.

### **Product Endpoints**
- `GET /products` - Retrieve all products.
- `GET /products/:id` - Retrieve a single product by ID.
- `POST /products` - Create a new product.
- `PATCH /products/:id` - Update a product.
- `DELETE /products/:id` - Delete a product.

---

## **Technologies Used**
- **NestJS**: Backend framework.
- **Prisma**: ORM for database interaction.
- **Swagger**: API documentation.
- **MySQL**: Database.

---

## **License**
This project is licensed under the MIT License.

# Veggify Recipe Backend

This repository contains the backend code for the Veggify Recipe application. It provides API endpoints for managing items, categories, and other related functionalities.

## Live Links
- **Frontend Live URL**: [Veggify Recipe Frontend](https://veggify-recipe-fontend.vercel.app/)
- **Backend Live URL**: [Veggify Recipe Backend](https://veggify-recipe-backend.vercel.app/)
- **GitHub Repository**:
  - [Frontend Repository](https://github.com/saagor16/Veggify-Recipe-Fontend)
  - [Backend Repository](https://github.com/saagor16/Veggify-Recipe-Backend)

---

## Features
- **API Endpoints**:
  - `GET /api/all-items` - Fetch all items.
  - `GET /api/categories` - Fetch all categories.
  - `GET /api/items/:id` - Fetch a single item by ID.
- **Database Integration**:
  - Connected to MongoDB Atlas.
- **Data Models**:
  - Item Model.
  - Category Model.

## Technologies Used
- **Backend Framework**: Express.js
- **Database**: MongoDB Atlas
- **Authentication**: firebase
- **Environment Variables**: dotenv
- **Cross-Origin Resource Sharing**: cors
- **Server Deployment**: Vercel

---

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/saagor16/Veggify-Recipe-Backend
   cd veggify-recipe-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://<username>:<password>@veggify-recipe-react.mongodb.net/<database-name>?retryWrites=true&w=majority
   ```
4. Start the server:
   ```bash
   npm start
   ```

---

## API Documentation

### Base URL
```
https://veggify-recipe-backend.vercel.app/
```

### Endpoints
#### Items
- `GET /all-items`
- `GET /items/:id`

#### Categories
- `GET /categories`

---

## Contribution
Feel free to fork this repository and make pull requests.

---

## Author
- **Sagor**
  - [GitHub](https://github.com/saagor16)
  - [LinkedIn](https://www.linkedin.com/in/saagor/)

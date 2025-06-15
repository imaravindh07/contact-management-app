# contact-management-app
a node.js rest api for managing personal contacts. This app allows users to register, log in, and perform all basic operations (create, read, update, delete) on their own contacts securely.

## features

- user registration and login
- jwt-based authentication
- secure password hashing with bcrypt
- only authenticated users can access contact routes
- full crud operations on contacts
- each contact is linked to a specific user
- organized mvc folder structure

## tech stack

- node.js
- express.js
- mongodb + mongoose
- jsonwebtoken (jwt)
- bcrypt
- dotenv
- thunder client (for api testing)

## folder structure

```bash
contact-management-app/
├── config/             # MongoDB connection config
├── controllers/        # Logic for users and contacts
├── middleware/         # Auth token validation and error handling
├── models/             # Mongoose schemas for User and Contact
├── routes/             # API route handlers
├── .env                # Environment variables (not pushed to Git)
├── server.js           # Main entry point
├── package.json        # Project dependencies and scripts
```


## api endpoints

### 🔐 auth routes

- `POST /api/users/register` – register a new user
- `POST /api/users/login` – login and receive a jwt token
- `GET /api/users/current` – get info about the current user (requires token)

### 📇 contact routes (requires auth token)

- `GET /api/contacts` – get all contacts of the user
- `POST /api/contacts` – create a new contact
- `GET /api/contacts/:id` – get a specific contact
- `PUT /api/contacts/:id` – update a contact
- `DELETE /api/contacts/:id` – delete a contact



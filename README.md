# Mini Chat with OpenAI Integration

This project is a small application that allows users to authenticate and make requests to the OpenAI API using NestJS. The application includes user management, OpenAI integration, and security measures to protect user data.

## Project Requirements

### User Management
- **Registration Endpoint:** Allows users to register by providing necessary details (e.g., email, password).
- **Authentication Endpoint:** Allows users to log in and receive a JWT token for session management.

### OpenAI Integration
- **Question Endpoint:** Allows authenticated users to send questions to the OpenAI API and receive responses via Server-Sent Events (SSE). Each question and its corresponding response are stored in the database.
- **Error Handling:** Properly handles errors from the OpenAI API.

### Security
- **Data Protection:** Ensures sensitive user data is stored securely.
- **Authentication & Authorization:** Protects endpoints using JWT tokens and ensures proper access control.

## Installation and Setup

### Prerequisites
- Node.js
- yarn
- Docker (optional, for containerized environments)

### Clone the Repository
```bash
git clone https://github.com/linc-inc/mini-chat.git
cd mini-chat
```

### Install Dependencies
```bash
yarn install
```

### Environment Variables
Create a `.env` file in the root directory and add the necessary environment variables:
```
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
```

### Database Setup
This project uses SQLite for the database.

### Running the Application
```bash
yarn run start:dev
```

### Accessing the Database
To view and manage your SQLite database, you can use TablePlus or any other SQLite database viewer.

### Endpoints Overview

#### User Management
- **POST /auth/register:** Register a new user.
  - Request Body: `{ "email": "user@example.com", "password": "password123" }`
- **POST /auth/login:** Authenticate a user.
  - Request Body: `{ "email": "user@example.com", "password": "password123" }`
  - Response: `{ "access_token": "jwt_token" }`

#### OpenAI Integration
- **POST /openai/question:** Send a question to OpenAI and receive the response via Server-Sent Events (SSE).
  - Headers: `{ "Authorization": "Bearer jwt_token" }`
  - Request Body: `{ "question": "What is NestJS?" }`
  - Response: If streaming is chosen, the response will be handled via Server-Sent Events (SSE). Otherwise, the response of this endpoint will be the AI's response directly.
  - The question and its corresponding response will be stored in the database.

- **(Optional) GET /openai/stream:** Stream responses to the client's questions in real time via Server-Sent Events (SSE).
  - Headers: { "Authorization": "Bearer jwt_token" }
  - Response: The response from the AI will be streamed back to the client


### Security Considerations
- **Password Hashing:** Ensure passwords are hashed before storing in the database.
- **JWT Expiry:** Implement expiration for JWT tokens to enhance security.

## Discussion Points
- **Approach:** Be ready to discuss how you approached the project.
- **Tradeoffs:** Discuss any tradeoffs made due to time constraints.
- **Next Steps:** Be prepared to outline next steps for improving scalability and security.


# Pending tasks

1. Solve jwt-service error at load secret from env files and configuration services
2. Add Guard for intersect jwt info in request
3. Add services call to openai chat
4. Add support for Encryption in order to endure security

# Desirable
1. Improve solution organization (separate folders for common, helpers, providers, services, etc.)
2. Add exception management
3. Create a guard to catch errors
4. Add logging and auditing support
5. Add support for keyvault
6. Complete operations supported by controllers (CRUD)
7. Implement unit test
8. Validate use of best practices
9. Validate use of adequate patterns
10. Implement use of helmet, whitelist, anti-xss, cors, etc.
11. Implement support for swagger and openapi standard.
12. Validate use of secure code strategies.

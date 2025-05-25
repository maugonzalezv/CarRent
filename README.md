# CarRent - Vehicle Rental Platform

CarRent is a comprehensive car rental platform that connects users with a diverse fleet of vehicles across Mexico. The platform offers an intuitive interface for browsing, searching, and booking rental cars with various specifications to meet different needs.

## Features

- **Vehicle Browsing**: Browse through a diverse selection of cars with detailed information
- **Advanced Search**: Filter vehicles by type, transmission, fuel type, and location
- **Booking System**: Seamless reservation process with date selection
- **Insurance Options**: Choose from different insurance packages
- **User Authentication**: Secure login and registration system
- **Reservation Management**: View and manage your current reservations

## Technology Stack

### Frontend

- **React 19**: Modern UI library for building interactive user interfaces
- **TypeScript**: Static typing for improved code quality and developer experience
- **Tailwind CSS**: Utility-first CSS framework for custom, responsive design
- **React Router**: Client-side routing for single-page application
- **Axios**: HTTP client for API requests

### Backend

- **Node.js**: JavaScript runtime for server-side operations
- **Express**: Web application framework for Node.js
- **PostgreSQL**: Relational database for data storage
- **Sequelize**: ORM for database interaction
- **JWT**: JSON Web Tokens for secure authentication
- **bcrypt**: Password hashing for user security

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Configure environment variables
4. Start the development server:
   ```
   npm start
   ```

## Project Structure

- `/frontend`: Contains the React application
- `/backend`: Houses the Node.js/Express server
  - `/controllers`: Request handlers
  - `/models`: Data models
  - `/routes`: API routes
  - `/middlewares`: Custom middleware functions
  - `/utils`: Utility functions
  - `/config`: Configuration files

## License

ISC

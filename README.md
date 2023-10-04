# Live Chat Application

This is a simple live chat application built using React, Express, and Socket.io. This README will guide you through the code and explain how to run the application locally.

## Features

- **Real-time Chat**: Allows users to join chat rooms and send/receive messages in real-time.
- **User-Friendly Interface**: Provides a user-friendly interface for entering a username, room ID, and sending messages.
- **Timestamps**: Displays timestamps for each message.
- **Scrollable Chat Window**: Automatically scrolls to the latest message for a seamless chat experience.
- **Disconnect Handling**: Logs when users connect and disconnect from the chat room.
- **Cross-Origin Resource Sharing (CORS)**: Handles CORS for proper communication between the client and server.

## Prerequisites

Before running the application, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (with npm)
- [Git](https://git-scm.com/)

## Installation and Setup

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/live-chat-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd live-chat-app
   ```

3. Install server dependencies:

   ```bash
   cd server
   npm install
   ```

4. Install client dependencies:

   ```bash
   cd client
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   cd server
   npm start
   ```

   This will start the server on `http://localhost:3001`.

2. Start the client:

   ```bash
   cd client
   npm start
   ```

   This will start the React application on `http://localhost:5173`.

3. Open your web browser and navigate to `http://localhost:5173` to access the chat application.

4. Enter your username and room ID, and click "Join Room" to start chatting.

5. Enjoy real-time chat with other users in the same room!

## Object-Oriented Programming (OOP) Concepts

This application follows some key OOP concepts:

- **Encapsulation**: Data and functions related to a specific component or feature are encapsulated within that component (e.g., `Chat.js` contains all chat-related logic and state).

- **Abstraction**: Complex functionalities are abstracted into smaller, manageable components and functions for better code organization.

- **Modularity**: The codebase is organized into separate files (`App.js`, `Chat.js`, `index.js`) to promote modularity and maintainability.

- **Reusability**: React components are used to create reusable UI elements, such as message containers and input fields.


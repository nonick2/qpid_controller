# QPID Controller

A lightweight Node.js Express application designed to serve as a controller for QPID (Apache Qpid) messaging systems. This project provides a web-based interface and API for managing and monitoring QPID message brokers.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Development](#development)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Overview

The QPID Controller is a web application built with Node.js and Express.js that provides a centralized interface for managing Apache Qpid message brokers. Currently in early development, the application serves as a foundation for building comprehensive messaging system management capabilities.

**Current Status**: Basic Express server setup with placeholder endpoints. The application is in its initial development phase and ready for feature implementation.

## Features

### Current Features
- ✅ Basic Express.js web server
- ✅ HTTP endpoint structure
- ✅ JSON response handling
- ✅ Configurable port settings

### Planned Features
- 🔄 QPID broker connection management
- 🔄 Queue monitoring and management
- 🔄 Message routing configuration
- 🔄 Real-time broker statistics
- 🔄 User authentication and authorization
- 🔄 RESTful API for broker operations
- 🔄 Web-based dashboard interface

## Prerequisites

Before installing and running the QPID Controller, ensure you have the following installed:

- **Node.js** (version 14.0 or higher)
- **npm** (Node Package Manager, usually comes with Node.js)
- **Apache Qpid** message broker (for full functionality)

### System Requirements

- **Operating System**: Linux, macOS, or Windows
- **Memory**: Minimum 512MB RAM
- **Network**: Access to QPID broker ports (typically 5672 for AMQP)

## Installation

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/nonick2/qpid_controller.git
   cd qpid_controller
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the application**
   ```bash
   npm start
   ```

4. **Verify installation**
   Open your browser and navigate to `http://localhost:8080`
   You should see "Hello World!" displayed, confirming the server is running.

### Alternative Installation Methods

#### Using NPM (when published)
```bash
npm install -g qpid-controller
qpid-controller start
```

#### Docker Installation (planned)
```bash
docker pull qpid-controller:latest
docker run -p 8080:8080 qpid-controller
```

## Configuration

### Environment Variables

The application can be configured using environment variables:

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | 8080 | Port number for the web server |
| `NODE_ENV` | development | Application environment |
| `QPID_HOST` | localhost | QPID broker hostname |
| `QPID_PORT` | 5672 | QPID broker port |

### Configuration File

Create a `.env` file in the project root for local configuration:

```env
PORT=8080
NODE_ENV=development
QPID_HOST=localhost
QPID_PORT=5672
```

## Usage

### Starting the Server

```bash
# Start in development mode
npm start

# Start with custom port
PORT=3000 npm start

# Start in production mode
NODE_ENV=production npm start
```

### Basic API Usage

Currently, the application provides a simple endpoint:

```bash
# Health check endpoint
curl http://localhost:8080/

# Expected response: "Hello World!"
```

### Stopping the Server

Press `Ctrl+C` in the terminal where the server is running, or send a SIGTERM signal to the process.

## API Documentation

### Current Endpoints

#### GET /
- **Description**: Health check and welcome endpoint
- **Response**: Plain text "Hello World!"
- **Status Code**: 200 OK

### Planned API Endpoints

The following endpoints are planned for future releases:

- `GET /api/status` - Get application and broker status
- `GET /api/brokers` - List connected QPID brokers
- `POST /api/brokers` - Add new broker connection
- `GET /api/queues` - List all queues
- `POST /api/queues` - Create new queue
- `DELETE /api/queues/:name` - Delete a queue
- `GET /api/messages/:queue` - Get messages from queue

## Development

### Setting Up Development Environment

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/your-username/qpid_controller.git
   cd qpid_controller
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

### Project Structure

```
qpid_controller/
├── server.js          # Main application entry point
├── package.json       # Project metadata and dependencies
├── .gitignore        # Git ignore rules
├── README.md         # Project documentation
└── node_modules/     # Dependencies (auto-generated)
```

### Development Guidelines

- Follow JavaScript ES6+ standards
- Use meaningful variable and function names
- Add comments for complex logic
- Test all changes thoroughly
- Update documentation when adding features

### Adding New Features

1. Create a new branch for your feature
2. Implement the feature with appropriate error handling
3. Add tests if testing framework is available
4. Update documentation
5. Submit a pull request

## Contributing

We welcome contributions to the QPID Controller project! Here's how you can help:

### How to Contribute

1. **Fork the repository** on GitHub
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Make your changes** and commit them (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Contribution Guidelines

- Ensure your code follows the existing style
- Add tests for new functionality when possible
- Update documentation for any new features
- Keep commits focused and atomic
- Write clear, descriptive commit messages

### Reporting Issues

If you find a bug or have a feature request:

1. Check if the issue already exists in the GitHub issues
2. Create a new issue with a clear title and description
3. Include steps to reproduce (for bugs)
4. Add labels to categorize the issue

### Code of Conduct

This project adheres to a code of conduct that ensures a welcoming environment for all contributors. Please be respectful and constructive in all interactions.

## License

This project is licensed under the MIT License - see the [package.json](package.json) file for details.

### MIT License Summary

- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed
- ❌ No warranty provided
- ❌ No liability assumed

## Acknowledgments

- **Apache Qpid Community** - For developing the robust messaging middleware that this project interfaces with
- **Express.js Team** - For the excellent web framework that powers this application
- **Node.js Community** - For the runtime environment and ecosystem
- **Contributors** - All developers who contribute to improving this project

### Third-Party Libraries

- [Express.js](https://expressjs.com/) - Web application framework
- [Node.js](https://nodejs.org/) - JavaScript runtime environment

---

## Support

For support, questions, or discussions:

- 📧 Create an issue on GitHub
- 📖 Check the documentation in this README
- 🔗 Visit the [project repository](https://github.com/nonick2/qpid_controller)

---

**Project Status**: In Active Development | **Version**: 0.0.1 | **Last Updated**: September 2024
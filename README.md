# Employee API Backend
This repository contains a practice RESTful API that queries an employee MySQL database

## Tech Stack
- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)

## Environment Variables
The following environment variables are required for the app to function properly:

| Variable Name | Description |
|---------------|-------------|
| `DB_HOST` | URL of where you are hosting the database |
| `DB_USER` | User created when setting up MySQL |
| `DB_PASSWORD` | Password created when setting up MySQL |
| `DB_NAME` | Name of your database |
| `DB_PORT` | Any port you decide to run the database on |

You can configure these environment variables directly in the Amplify console or locally using a `.env` or `.env.local` files during development.

## Installation

### Prerequisites
Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [MySQL Workbench](https://www.mysql.com/products/workbench/)
- [Employee Sample DB](https://dev.mysql.com/doc/employee/en/)
- [Postman](https://www.postman.com/)(Optional for API testing)

### Steps to Install
1. Clone Repository
```bash
git clone https://github.com/JustinDosaj/employee-sql-db.git
```

2. Follow installation instructions to setup [Employees Sample Database](https://dev.mysql.com/doc/employee/en/employees-installation.html)

3. Setup Environment Variables (See Above)

4. Start MySQL Database via MySQL workbench (Optionally use [Docker](https://www.docker.com/))

5. Start Node Server
```bash
npm run dev
```
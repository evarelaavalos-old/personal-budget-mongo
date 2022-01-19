# Personal Budget App with MongoDB

## Table of Contents

- [Overview](#overview)
- [Usage](#usage)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
- [API Endpoints](#api)

## Overview <a id="overview"></a>

![preview of the project](docs/preview.jpeg)

This is a project build for Alkemy following these [requirements](/docs/ChallengeFullstack-JavaScript.rev2.pdf) and was created with these technologies:
- **Frontend**: 
  - **Framework**: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
  - **Styles**: For the styling it uses ***plain CSS*** within ***CSS modules***.
  - **Icons**: The icons are from [Font Awesome Icons](https://fontawesome.com/).

- **Backend**:
  - **Framework**: Is build in ***Node.js*** using the ***Express.js*** Framework.
  - **Database**: For the data uses the ***MongoDB*** database.

## Usage <a id="usage"></a>

### Prerequisites <a id="prerequisites"></a>

To make use of this project you need to have installed these programs in your system:

1. [Node.js](https://nodejs.org/en/)

### Setup <a id="setup"></a>

#### 1. Git clone this project in your machine.

```bash
git clone https://github.com/evarelaavalos/personal-budget-mongo
cd personal-budget-mongo
```
#### 2. Install the dependencies.

```bash
# In the root directory of the project
npm install
```

#### 3. Create a `.env` file in the `/server` directory of your project.

Copy paste the following example into the file:

```bash
# .env file
#
# Add environment-specific variables on new lines in the form of NAME=VALUE
#
HOST=8000
MONGO_URL=mongodb+srv://mongo-app:...
```

The `HOST` variable is optional. By default its value is `8000`.

Set the variables with the data of your own database:

- `MONGO_URL` (**required**): The connection string provided by MongoDB Atlas Database.

#### 4. Run the server.

```bash
# In the root directory of the project
npm run deploy
```

#### 5. Open the browser on the assigned port: `http://localhost:8000`

## API Endpoints <a id="api"></a>

### `GET /transactions`

You can retrieve all the transactions made in the application.

### `POST /transactions`

To register a new transaction, send a POST request with a `body` like the next example:

```json
{
    "concept": "Compra de un lavarropas Dream",
    "date": "2020-12-02",
    "amount": 64999.99,
    "type": 1
}
```

### `PUT /transactions/{id}`

You can update an already existing transaction using the PUT request. It accepts a `body` similar to the POST request, except you cannot change the `type` field.

```json
{
    "concept": "Compra de un lavarropas con descuento",
    "date": "2020-12-02",
    "amount": 53200.99
}
```

### `DELETE /transactions/{id}`

You can delete a specific transaction.

### `GET /types`

You can retrieve all types of transactions available.

### `GET /balance`

Retrieves the current account balance of the application.

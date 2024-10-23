# Personal Expense Tracker API

## Overview

A RESTful API for managing personal financial records, allowing users to record their income and expenses, retrieve past transactions, and get summaries by category or time period.

## Technologies Used

- **Backend Framework**: Node.js with Express.js
- **Database**: SQLite

## Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/personal-expense-tracker.git


API documentation

1. Transactions API
1.1 Create a Transaction
Endpoint: POST /transactions
Description: Adds a new transaction (income or expense).
jsonCopy code{ "type": "income", // "income" or "expense" "category": "Salary", "amount": 5000, "date": "2024-10-01", // Format: YYYY-MM-DD "description": "Monthly salary", "userId": 1 // Optional: ID of the user}
jsonCopy code{ "id": 1, // ID of the newly created transaction "message": "Transaction created successfully."}
201 Created





1.2 Retrieve All Transactions
Endpoint: GET /transactions
Description: Retrieves all transactions.
jsonCopy code[ { "id": 1, "type": "income", "category": "Salary", "amount": 5000, "date": "2024-10-01", "description": "Monthly salary", "userId": 1 }, ...]
200 OK





1.3 Retrieve a Transaction by ID
Endpoint: GET /transactions/:id
Description: Retrieves a transaction by its ID.
Parameters:
id (integer): The ID of the transaction to retrieve.

jsonCopy code{ "id": 1, "type": "income", "category": "Salary", "amount": 5000, "date": "2024-10-01", "description": "Monthly salary", "userId": 1}jsonCopy code{ "message": "Transaction not found."}
200 OK




Plain Text








- **404 Not Found** (if transaction ID does not exist)





1.4 Update a Transaction by ID
Endpoint: PUT /transactions/:id
Description: Updates a transaction by its ID.
Parameters:
id (integer): The ID of the transaction to update.

jsonCopy code{ "type": "expense", // "income" or "expense" "category": "Groceries", "amount": 150, "date": "2024-10-05", // Format: YYYY-MM-DD "description": "Weekly groceries", "userId": 1 // Optional}
jsonCopy code{ "message": "Transaction updated successfully."}jsonCopy code{ "message": "Transaction not found."}
200 OK




Plain Text








- **404 Not Found** (if transaction ID does not exist)





1.5 Delete a Transaction by ID
Endpoint: DELETE /transactions/:id
Description: Deletes a transaction by its ID.
Parameters:
id (integer): The ID of the transaction to delete.

jsonCopy code{ "message": "Transaction not found."}
204 No Content (if deleted successfully)
404 Not Found (if transaction ID does not exist)





1.6 Retrieve Transaction Summary
Endpoint: GET /transactions/summary
Description: Retrieves a summary of transactions, including total income, total expenses, and balance.
Query Parameters:
startDate (optional): Start date for the summary (format: YYYY-MM-DD).
endDate (optional): End date for the summary (format: YYYY-MM-DD).

jsonCopy code{ "totalIncome": 5000, "totalExpenses": 1500, "balance": 3500}
200 OK





2. Categories API
2.1 Create a Category
Endpoint: POST /categories
Description: Adds a new category.
jsonCopy code{ "name": "Groceries", "type": "expense" // "income" or "expense"}
jsonCopy code{ "id": 1, // ID of the newly created category "message": "Category created successfully."}
201 Created





2.2 Retrieve All Categories
Endpoint: GET /categories
Description: Retrieves all categories.
jsonCopy code[ { "id": 1, "name": "Groceries", "type": "expense" }, ...]
200 OK





Error Handling
The API should return appropriate HTTP status codes and messages for error scenarios, such as:
400 Bad Request: Invalid input data.
404 Not Found: Resource not found (e.g., transaction or category ID does not exist).
500 Internal Server Error: Server error.

Conclusion
This API documentation provides an overview of how to interact with the Personal Expense Tracker API, detailing the endpoints, request formats, and responses.
EndFragment



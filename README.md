# **FruitCount**

FruitCount is a simple web application developed using Node.js, MongoDB, and Docker, designed as an exercise in creating a containerized application with a NoSQL database and Infrastructure as Code (IaC).

## **Overview**

The application initializes by establishing a connection to a MongoDB database, creating a collection named 'fruits', and populating it with predefined data representing various fruits and their quantities.

Upon visiting the application, users will be presented with the quantity of apples as retrieved from the MongoDB database. The purpose of this feature is to demonstrate the application's ability to interact with its database.

The Node.js application and MongoDB database run within separate Docker containers, demonstrating the principle of containerization where each service runs in an isolated environment.

## **Key Features**

- **Node.js web application**: Serves a basic webpage displaying the quantity of apples.
- **MongoDB integration**: Stores and retrieves data about various fruits, demonstrating CRUD operations.
- **Docker containerization**: Both the web application and the MongoDB database run in separate Docker containers, illustrating the principles of containerization.
- **Infrastructure as Code (IaC)**: All infrastructure is defined in code and scripts, ensuring environment consistency and simplifying the setup process.

This project serves as a simple yet comprehensive example of how to build, containerize, and manage a web application using popular technologies such as Node.js, MongoDB, Docker, and Infrastructure as Code (IaC). It is ideal for developers seeking to learn or deepen their understanding of these concepts.

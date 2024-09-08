# Building a Custom File Upload Module in NestJS for CSV and XLS/XLSX Parsing Without Saving Files to Disk

## Introduction

This repository demonstrates how to build a custom file upload module in NestJS to handle CSV and XLS/XLSX file uploads. The files are parsed directly in memory using Node.js streams, avoiding saving them to disk. This approach enhances security and reduces server storage costs.

## Prerequisites

Before running the project, ensure that the following are installed on your system:

- **Docker**: Ensure Docker is installed and running.
- **Docker Compose**: Installed for container orchestration.
- **Node.js**: Required to run the application.
- **npm**: Node package manager to install dependencies.

### Local Environment Example

Here are the environment details of a machine that successfully runs this application (MacBook Pro with Apple M1 Pro):

- **Node.js**: v22.0.0
- **npm**: v10.5.1
- **Docker**: v26.0.0
- **Docker Compose**: v2.26.1-desktop.1

## Features

- **In-Memory File Parsing**: CSV and XLS/XLSX files are parsed in memory without being saved to disk.
- **Secure Processing**: No sensitive data is stored on the server’s file system.
- **Custom Storage Engine**: Only CSV and Excel files are accepted, with other types rejected.
- **Stream Processing**: Files are processed efficiently using Node.js streams.

## Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Magam9/article-multer-engine
cd article-multer-engine
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Running with Docker

To run and debug the application using launch.json, ensure that your IDE (e.g., VSCode) has a proper launch configuration for Node.js.

### 4. Testing File Upload

1. Open the file upload page by going to http://localhost:3000.
2. Select a CSV or XLSX file and click Upload.
3. The server will parse the file and return the parsed data.

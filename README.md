# Spring AI Demo

Welcome to the **Spring AI Demo** application! This project showcases the integration of AI capabilities using Spring AI on the backend and React.js on the frontend. With this application, you can:

- **Ask AI anything**: Enter any question, and the AI will provide a thoughtful response.
- **Create recipes**: Generate recipes based on specific ingredients, cuisines, and dietary restrictions.
- **Generate images**: Create AI-generated images based on your prompt.

## Prerequisites

To run this project, ensure you have the following installed on your system:

1. **Java Development Kit (JDK)** (version 17 or higher).
2. **Node.js** (version 16 or higher).
3. **Docker** (optional but recommended for simplified setup).
4. **An OpenAI API Key**: This is required to access AI functionalities. You can obtain it by signing up at [OpenAI](https://platform.openai.com/signup/).

---

## Project Structure

The repository is structured as follows:

```
SpringAiDemo/
├── spring-ai-react-app/   # Frontend application built with React.js
├── src/                   # Backend Spring Boot application source code
├── Dockerfile.backend     # Dockerfile for the backend
├── Dockerfile.frontend    # Dockerfile for the frontend
├── docker-compose.yml     # Docker Compose file for containerized deployment
```

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/farabi23/SpringAiDemo.git
cd SpringAiDemo
```

### 2. Set Up the Backend

1. Navigate to the root folder (where the `src/` directory is located).
2. Create a `.env` file in the root directory and add your OpenAI API key:
   ```env
   OPENAI_API_KEY=your_openai_api_key_here
   ```
3. Build and run the backend:
   ```bash
   ./mvnw package
   java -jar target/SpringAiDemo-0.0.1-SNAPSHOT.jar
   ```

The backend will start on `http://localhost:8080`.

### 3. Set Up the Frontend

1. Navigate to the `spring-ai-react-app/` folder:
   ```bash
   cd spring-ai-react-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend application:
   ```bash
   npm start
   ```

The frontend will start on `http://localhost:3000`.

---

## Using Docker for Simplified Deployment

To eliminate dependency issues, you can run the application using Docker. Follow these steps:

### 1. Build and Run Containers

1. Ensure Docker is installed and running on your system.
2. Build and run the application using Docker Compose:
   ```bash
   docker-compose up --build
   ```

This will:
- Build and start the backend container on `http://localhost:8080`
- Build and start the frontend container on `http://localhost:3000`

### 2. Access the Application

Open your browser and navigate to `http://localhost:3000`.

---

## Features

### **Ask AI Anything**
- Enter a question, and the AI will provide an answer using OpenAI's GPT model.

### **Create Recipes**
- Input ingredients, cuisine preferences, and dietary restrictions to generate a custom recipe.

### **Generate Images**
- Provide a descriptive prompt, and the AI will create a matching image for you.

---

## Environment Variables

The application requires the following environment variables:

- **OPENAI_API_KEY**: Your API key for OpenAI.

For Docker deployments, create a `.env` file in the root directory with this variable, and Docker Compose will automatically load it.

---

## Additional Notes

1. **API Endpoints**:
   - **GET** `/generate-text?prompt=your_prompt`: Generates text based on the prompt.
   - **GET** `/generate-recipe`: Creates a recipe based on query parameters.
   - **GET** `/generate-image?prompt=your_prompt`: Generates an image based on the prompt.

2. **Frontend Configuration**:
   - The frontend communicates with the backend through the `/api` proxy. Ensure the backend is accessible at `http://localhost:8080` when developing locally.

3. **Docker Images**:
   - The Docker setup includes two services: `backend` and `frontend`. Each has its own Dockerfile for independent configuration.

---

## Troubleshooting

1. **Common Issues**:
   - **Error: "npm: command not found"**:
     Ensure Node.js and npm are installed and added to your system PATH.
   - **Error: "Could not find or load main class"**:
     Verify that you are using JDK, not JRE.

2. **Debugging Tips**:
   - Check container logs:
     ```bash
     docker-compose logs
     ```
   - Verify environment variables are correctly set in your `.env` file.

---

Feel free to reach out if you encounter any issues or have suggestions for improvement. Enjoy exploring the AI capabilities of this app!


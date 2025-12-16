# Sage & Seed 🌱

**Connecting Generations, Nurturing Minds**

Sage & Seed is a platform creating meaningful connections between senior living residents with neurodegenerative conditions and young adult volunteers. Through gentle, 1-to-1 video conversations and shared activities, we aim to improve mood, reduce isolation, and build empathy across generations.

## Project Structure

This project consists of:
*   **Frontend**: A React application offering a calm, accessible interface for users.
*   **Backend**: A Python FastAPI server (currently minimal) for API handling.

## Prerequisites

*   **Node.js** (v14+) and npm
*   **Python** (v3.8+) and pip
*   **MongoDB** (Ensure you have a running instance or connection string)

## 🚀 Getting Started

### 1. Frontend Setup (The Website)

The core website and user interface are located in the `frontend` directory.

1.  **Navigate to the directory:**
    ```bash
    cd frontend
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm start
    ```
    The site will open at [http://localhost:3000](http://localhost:3000).

### 2. Backend Setup (API)

The backend is built with FastAPI.

1.  **Navigate to the directory:**
    ```bash
    cd backend
    ```

2.  **Install Python requirements:**
    ```bash
    pip install -r requirements.txt
    ```

3.  **Environment Configuration:**
    Ensure you have a `.env` file in the `backend` directory with your MongoDB credentials:
    ```env
    MONGO_URL=mongodb://localhost:27017
    DB_NAME=sage_and_seed
    CORS_ORIGINS=http://localhost:3000
    ```

4.  **Run the server:**
    ```bash
    uvicorn server:app --reload
    ```
    The API will be available at [http://localhost:8000](http://localhost:8000).

## ✨ Key Features

*   **Cinematic Preloader**: A story-driven, calming entry sequence.
*   **Offerings**: Modules for music, storytelling, and gentle movement.
*   **Responsive Design**: Optimized for accessible use on tablets and desktops.
*   **AI Integration**: (Planned) Real-time conversation prompts and mood estimation.

## Tech Stack

*   **Frontend**: React, Tailwind CSS, Framer Motion, Lucide React
*   **Backend**: FastAPI, Motor (Async MongoDB), Pydantic
*   **Database**: MongoDB

---
*Created for the Sage & Seed Platform.*

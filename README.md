# form-checker-demo

This repository contains a demo application to showcase the capabilities of the form-checker library. The demo app is built using Next.js for the frontend and an Express.js server to provide mock data for asynchronous validations.

## Features

- **Real-time Validation:** Demonstrates real-time validation of form inputs.
- **Synchronous and Asynchronous Validation:** Showcases both synchronous checks (e.g., email format) and asynchronous checks (e.g., username availability).
- **User-friendly Interface:** A simple and intuitive UI to interact with the form and see validation results.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Getting Started

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/form-checker-demo.git
    cd form-checker-demo
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Application

1. **Start the mock data server:**
    ```bash
    npm run server
    ```
    The mock data server will run on [http://localhost:5000](http://localhost:5000).

2. **Start the frontend:**
    ```bash
    npm run dev
    ```
    The Next.js app will run on [http://localhost:3000](http://localhost:3000).

## Usage

1. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).
2. Fill in the form fields and see the validation results in real-time.
3. Try different inputs to test both synchronous and asynchronous validations.

## Project Structure

- `/pages`: Contains the Next.js pages for the demo app.
- `/components`: Contains the React components used in the demo app.
- `/public`: Static files like images and styles.
- `/server`: Contains the Express.js mock data server.

## Feedback

We welcome your feedback and suggestions! Please feel free to open an issue or submit a pull request.

Thanks for checking out our project!

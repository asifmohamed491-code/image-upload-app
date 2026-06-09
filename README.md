# React + Node.js Image Upload

A simple full-stack image upload application built using **React.js**, **Node.js**, **Express.js**, and **Multer**.

Users can select an image from the frontend and upload it to the backend server.

---

## Features

* Upload image from React frontend
* Store uploaded image in backend
* Real-time upload status message
* Clean and responsive UI using Tailwind CSS
* Axios API integration
* Multer file handling

---

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* React Icons

### Backend

* Node.js
* Express.js
* Multer

---

## Project Structure

```plaintext
Image-Upload
│
├── backend
│   ├── public_images
│   ├── index.js
│   ├── package.json
│
├── frontend
│   ├── src
│   │   ├── App.js
│   │   ├── Fileupload.js
│   │   ├── index.css
│   │
│   ├── package.json
│
└── README.md
```

---

## Installation

### Clone Project

```bash
git clone https://github.com/asifmohamed491-code/image-upload-app.git

```

Move into project:

```bash
cd Image-Upload
```

---

## Backend Setup

Open terminal:

```bash
cd backend
```

Install packages:

```bash
npm install
```

Run server:

```bash
node index.js
```

Backend runs at:

```plaintext
http://localhost:5000
```

---

## Frontend Setup

Open new terminal:

```bash
cd frontend
```

Install packages:

```bash
npm install
```

Start frontend:

```bash
npm start
```

Frontend runs at:

```plaintext
http://localhost:3000
```

---

## Upload Flow

```plaintext
Select Image
↓
React State
↓
FormData
↓
Axios POST
↓
Express Route
↓
Multer
↓
Save Image
↓
Success Message
```

---

## API Endpoint

### Upload Image

```http
POST /upload
```

Request:

```plaintext
multipart/form-data
```

Fields:

```plaintext
file
fileName
```

Response:

```json
{
  "message":"File Uploaded Successfully"
}
```

---

## Future Improvements

* Drag and Drop Upload
* Upload Progress Bar
* Preview Image
* Cloudinary Storage
* Authentication

---

## Author

Mohamed Asif

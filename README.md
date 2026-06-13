# React + Node.js Cloudinary Image Upload

A simple full-stack image upload application built using **React.js**, **Node.js**, **Express.js**, **Multer**, and **Cloudinary**.

Users can select an image from the frontend and upload it directly to **Cloudinary Cloud Storage** through the backend.

---

## Features

✅ Upload image from React frontend
✅ Store uploaded images in Cloudinary
✅ Real-time upload status messages
✅ Responsive UI using Tailwind CSS
✅ Axios API integration
✅ Multer middleware for file handling
✅ Environment variable configuration with `.env`

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
* Cloudinary
* dotenv

---

## Project Structure

```plaintext
Image-Upload
│
├── backend
│   ├── index.js
│   ├── .env
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

### Clone Repository

```bash
git clone https://github.com/asifmohamed491-code/image-upload-app.git
```

Move into project:

```bash
cd image-upload-app
```

---

## Backend Setup

Open terminal:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Run backend:

```bash
node index.js
```

Backend runs at:

```plaintext
http://localhost:5000
```

---

## Frontend Setup

Open another terminal:

```bash
cd frontend
```

Install dependencies:

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
Cloudinary Upload
↓
Image URL Response
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
```

Response:

```json
{
  "message": "Image Uploaded Successfully",
  "imageUrl": "cloudinary-image-url"
}
```

---

## Future Improvements

* Drag and Drop Upload
* Upload Progress Bar
* Preview Image
* Multiple Image Upload
* Authentication
* Image Compression

---

## Author

**Mohamed Asif**

Frontend + Backend Developer

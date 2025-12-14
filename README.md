# virtual-try-on-
AI-Based Virtual Try-On Platform for Woolen Clothing
Project Overview

This project is a web-based AI Virtual Try-On system designed for woolen clothing e-commerce platforms.
It enables users to preview how a woolen shirt fits their body before purchasing by combining computer vision, body measurement estimation, and 3D visualization.

The system aims to reduce size mismatch, product returns, and customer uncertainty in online shopping.

Problem Addressed

Customers cannot physically try clothes online

Woolen garments are highly size-sensitive

Generic size charts are inaccurate

High return rates due to incorrect size selection

Solution Approach

User uploads a full-body image

AI-based pose detection extracts body landmarks

Key body measurements are calculated

Best-fit size is predicted (S / M / L)

A 3D mannequin is scaled to match the user’s body

Fit status is displayed before purchase

Key Features

AI-based body measurement extraction

Automated clothing size prediction

3D mannequin visualization

Fit classification (Tight / Perfect / Loose)

Modular full-stack architecture

Scalable for real-world e-commerce integration

Technologies Used
Frontend

React.js

Vite

Three.js

React Three Fiber

Axios

Backend

FastAPI (Python)

MediaPipe (Pose Detection)

OpenCV

NumPy

Tools

Git & GitHub

Git LFS (for large 3D assets)

Blender (3D model conversion)

System Architecture
User Image
   ↓
Pose Detection (MediaPipe)
   ↓
Body Measurements
   ↓
Size Prediction
   ↓
3D Mannequin Scaling
   ↓
Virtual Try-On Visualization

Project Structure
virtual-tryon/
│
├── backend/
│   ├── app.py
│   ├── pose/
│   ├── measurements/
│   ├── sizing/
│   └── uploads/
│
├── frontend/
│   ├── src/
│   ├── public/
│   │   └── models/
│   │       └── mannequin.glb
│
├── .gitignore
├── .gitattributes
└── README.md

How to Run
Backend
cd backend
uvicorn app:app --reload


API documentation:

http://127.0.0.1:8000/docs

Frontend
cd frontend
npm install
npm run dev


Application URL:

http://localhost:5173

Sample Output

Predicted Size: M

Fit Status: Perfect Fit

3D mannequin scaled according to user body measurements

Future Enhancements

Realistic cloth simulation

Woolen texture and color try-on

Skin-tone based color recommendation

AR-based mobile try-on

Direct e-commerce checkout integration

Skills Demonstrated

Computer Vision and AI

Full-Stack Web Development

3D Graphics and Visualization

Modular Backend Design

Version Control using Git and Git LFS

Conclusion

This project demonstrates a practical AI-driven solution for improving online woolen clothing shopping by integrating intelligent size prediction with 3D visualization.
It is suitable for academic evaluation, hackathons, and industry-level applications.

Author

Yoga Chinni Krishna
B.Tech CSE
Interests: AI, Computer Vision, Game Development, Full-Stack Development

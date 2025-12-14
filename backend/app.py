from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import shutil
import os

from pose.pose_detector import detect_pose
from measurements.body_measurements import estimate_measurements
from sizing.size_classifier import predict_size

app = FastAPI()

# Allow frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)

@app.post("/upload-image/")
async def upload_image(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    landmarks = detect_pose(file_path)
    measurements = estimate_measurements(landmarks)
    predicted_size = predict_size(measurements)

    return {
        "message": "Image uploaded successfully",
        "predicted_size": predicted_size,
        "measurements": measurements
    }

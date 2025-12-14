import math

LEFT_SHOULDER = 11
RIGHT_SHOULDER = 12
LEFT_HIP = 23
RIGHT_HIP = 24

def distance(p1, p2):
    return math.sqrt(
        (p1["x"] - p2["x"])**2 +
        (p1["y"] - p2["y"])**2
    )

def estimate_measurements(landmarks):
    if len(landmarks) < 25:
        return {}

    shoulder_width = distance(
        landmarks[LEFT_SHOULDER],
        landmarks[RIGHT_SHOULDER]
    )

    hip_width = distance(
        landmarks[LEFT_HIP],
        landmarks[RIGHT_HIP]
    )

    return {
        "shoulder_width": shoulder_width,
        "hip_width": hip_width
    }

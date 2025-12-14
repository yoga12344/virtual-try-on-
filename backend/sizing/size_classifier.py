def classify_size(measurements):
    """
    Uses relative body proportions to estimate clothing size.
    Values are normalized (from MediaPipe).
    """

    shoulder = measurements.get("shoulder_width", 0)
    hip = measurements.get("hip_width", 0)

    if shoulder == 0 or hip == 0:
        return "Unknown"

    # Simple heuristic thresholds (can be refined later)
    avg = (shoulder + hip) / 2

    if avg < 0.17:
        return "S"
    elif 0.17 <= avg < 0.20:
        return "M"
    else:
        return "L"

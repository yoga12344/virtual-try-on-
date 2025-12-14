import { useState } from "react";
import axios from "axios";
import "./App.css";
import Mannequin from "./Mannequin";   // ✅ IMPORTANT IMPORT

function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [selectedSize, setSelectedSize] = useState("M");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);

    try {
      setLoading(true);
      const response = await axios.post(
        "http://127.0.0.1:8000/upload-image/",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      setResult(response.data);
    } catch (error) {
      alert("Upload failed");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getFitStatus = () => {
    if (!result) return "";

    const predicted = result.predicted_size;
    if (predicted === selectedSize) return "Perfect Fit";
    if (
      (predicted === "S" && selectedSize === "M") ||
      (predicted === "M" && selectedSize === "L")
    )
      return "Loose Fit";
    return "Tight Fit";
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Virtual Try-On</h1>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          setImage(e.target.files[0]);
          setPreview(URL.createObjectURL(e.target.files[0]));
        }}
      />

      <br /><br />

      {preview && (
        <img
          src={preview}
          alt="Preview"
          style={{ width: "200px", borderRadius: "10px" }}
        />
      )}

      <br /><br />

      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Processing..." : "Upload Image"}
      </button>

      {result && (
        <div style={{ marginTop: "30px" }}>
          <h3>Predicted Size: {result.predicted_size}</h3>

          {/* ✅ 3D MANNEQUIN */}
          <Mannequin
            shoulderWidth={result.measurements.shoulder_width}
          />

          <br />

          <label>Select Shirt Size: </label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
          </select>

          <h2 style={{ marginTop: "20px" }}>{getFitStatus()}</h2>

          <p>
            Shoulder Width:{" "}
            {result.measurements.shoulder_width.toFixed(3)}
          </p>
          <p>
            Hip Width:{" "}
            {result.measurements.hip_width.toFixed(3)}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;

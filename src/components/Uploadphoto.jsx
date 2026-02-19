import axios from "axios";
import  { useState } from "react";
import "./uploadphoto.css";

function UploadPhoto() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [preview, setPreview] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!file) {
      alert("Please select a file");
      return;
    }

    const token = localStorage.getItem("token"); 
    if (!token) {
      alert("Please login first");
      return;
    }

    const formData = new FormData();
    formData.append("uploadphoto", file);

    try {
      const res = await axios.post(
        "https://backenddata-02sd.onrender.comupload/photo-upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`, 
          },
        }
      );

      setMessage(res.data.message);
      setPreview(res.data.file.url); 
      console.log(res.data);
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
      setMessage(
        "Upload failed: " + (error.response?.data?.message || error.message)
      );
    }
  }

  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(selectedFile);
    } else {
      setPreview(null);
    }
  }

  return (
    <div className="upload-container">
      <div className="upload-card">
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <button type="submit">Upload</button>
        </form>

        {preview && (
          <div className="preview">
            <p>Preview:</p>
            <img
              src={preview}
              alt="Preview"
              style={{ width: "150px", marginTop: "10px" }}
            />
          </div>
        )}

        {message && <p>{message}</p>}
      </div>
    </div>
  );
}

export default UploadPhoto;

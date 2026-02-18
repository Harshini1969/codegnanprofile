import axios from 'axios'
import React, { useState } from 'react'
import './uploadphoto.css'

function UploadPhoto() {
  const [file, setFile] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault()

    if (!file) {
      alert('Please select a file')
      return
    }

    let formData = new FormData()
    formData.append('uploadphoto', file)

    console.log(file)

    try {
      let res = await axios.post(
        "https://backenddata-4.onrender.com/student/upload-photo",
        formData
      )
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

return (
  <div className="upload-container">
    <div className="upload-card">
      <form onSubmit={handleSubmit}>
        <input 
          type="file" 
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button type="submit">Upload</button>
      </form>
    </div>
  </div>
);

}

export default UploadPhoto

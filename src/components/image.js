import React, { useState } from 'react'
import './image.css'

const Image = () => {
    const [file, setFile] = useState();
    const [image, setImage] = useState();
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
        setImage(file);
    }

    function handleRemove(e){
        setFile('')
        setImage(null);
    }

  return (
    <div className="container-img">
    <h2>Profile Image</h2>
    <div className="img-container">
    <img src={file ? file : 'assets/profile.jpg'} />   
    </div>
   <div className="upload-container">
     <label className="upload-label" for="upload">Upload Image</label>
    <input type="file"  id="upload" onChange={handleChange}/>
   </div>
   <div className='remove-btn-container'>

   <button className="remove-image" onClick={handleRemove}>Remove Image</button>
   </div>
    
    </div>
  )
}

export default Image
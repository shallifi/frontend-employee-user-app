import React, { useState,useRef } from 'react'

function BadgePhotoGroup() {
    const [selectedPhoto, setSelectedPhoto] = useState('');
    const [photoPreview, setPhotoPreview] = useState('');
    const fileInputRef = useRef(null); // this is a reference to the file input field
    
    const handlePhotoChange = (event) => {
        console.log(event.target.files);
        // setSelectedPhoto(event.target.files[0]);
        const file = event.target.files[0];
        setSelectedPhoto(file);

        const reader = new FileReader();
        reader.onloadend = () => {
            setPhotoPreview(reader.result);
        };
        reader.readAsDataURL(file);
    };
    
    const handleClearPhoto = () => {
        setSelectedPhoto('');
        setPhotoPreview('');
        fileInputRef.current.value = ''; // this clears the file input field
    };

  return (
    <div>
        <h5>BadgePhotoGroup</h5>
        <h5>Upload a photo for badge</h5>
        <input
        type="file"
        name="file"
        onChange={handlePhotoChange}
        placeholder="Upload a photo of your badge"
        disabled={!!selectedPhoto} // if selectedPhoto is true, then disabled is true
        ref={fileInputRef} // this is a reference to the file input field
        
        />
        {photoPreview && (
            <div>
                <h5>Photo Preview</h5>
                <img src={photoPreview} alt="preview" style={{ maxWidth: '300px'}} />
                <button onClick={handleClearPhoto}>Clear Photo</button>

                </div>
        )    
        }




    </div>
  )
}


export default BadgePhotoGroup;
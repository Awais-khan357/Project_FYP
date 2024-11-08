import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ImageUpload = () => {
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image);

    try {
      axios.post("http://localhost:4000/events/img", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Change sucessfully");
      navigate("/");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div className="d-flex bg-secondary vh-100 justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h4 className="text-center mb-3">Add Images</h4>
          <div className="mb-1">
            <label htmlFor="">Home image</label>
            <input
              type="file"
              className="form-control"
              onChange={handleImageChange}
            />
          </div>
          <button type="submit" className="btn btn-secondary mt-3">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ImageUpload;

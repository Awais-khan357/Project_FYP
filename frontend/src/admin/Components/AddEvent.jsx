import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function AddEvent() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    id: "",
    title: "",
    description: "",
    image: null,
    time: "",
    date: "",
  });

  const handleImageChange = (e) => {
    setValues({ ...values, image: e.target.files[0] });
  };

  const handleAdd = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("time", values.time);
    formData.append("date", values.date);
    formData.append("image", values.image);

    try {
      await axios.post("http://localhost:4000/events/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/admin/Events");
    } catch (error) {
      console.error("Error uploading event data:", error);
    }
  };

  return (
    <div className="d-flex bg-secondary vh-100 justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleAdd}>
          <h4 className="text-center mb-3">Add Event</h4>
          <div className="mb-1">
            <label htmlFor="">Title:</label>
            <input
              type="text"
              className="form-control"
              value={values.title}
              onChange={(e) => setValues({ ...values, title: e.target.value })}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="">Description:</label>
            <input
              type="text"
              className="form-control input-group-lg"
              value={values.description}
              onChange={(e) =>
                setValues({ ...values, description: e.target.value })
              }
            />
          </div>
          <div className="mb-1">
            <label htmlFor="">Event image</label>
            <input
              type="file"
              className="form-control"
              onChange={handleImageChange} // Use separate handler for image
            />
          </div>
          <div className="mb-1">
            <label htmlFor="">Time (add Am or PM with time )</label>
            <input
              type="text"
              className="form-control"
              value={values.time}
              onChange={(e) => setValues({ ...values, time: e.target.value })}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="">Date:</label>
            <input
              type="date"
              className="form-control"
              onChange={(e) => setValues({ ...values, date: e.target.value })}
            />
          </div>
          <button type="submit" className="btn btn-secondary mt-3">
            submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddEvent;

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Modal() {
  const { cnic } = useParams();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    id: "",
    fname: "",
    lname: "",
    father: "",
    program: "",
    semester: "",
    cnic: "",
    dob: "",
    phone: "",
    address: "",
    type: "",
  });

  useEffect(() => {
    console.log(cnic);
    const fetchData = async () => {
      try {
        axios
          .get(`http://localhost:4000/students/${cnic}`, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res);
            setValues({
              ...values,
              id: res.data.std_id,
              fname: res.data.first_name,
              lname: res.data.last_name,
              father: res.data.father_name,
              program: res.data.program,
              semester: res.data.semester,
              cnic: res.data.cnic,
              email: res.data.email,
              phone: res.data.phone,
              dob: res.data.dob,
              address: res.data.address,
              type: res.data.type,
            });
          });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    const id = values.id;

    try {
      axios
        .put("http://localhost:4000/students/update/" + id, values)
        .then((res) => {
          navigate("/Student");
        });
    } catch (error) {
      console.error("Error Updating data:", error);
    }
  };

  return (
    <div className="d-flex bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleUpdate}>
          <h4 className="text-center mb-3">Update Student</h4>
          <div className="mb-1">
            <label htmlFor="">First Name:</label>
            <input
              type="text"
              className="form-control"
              value={values.fname}
              onChange={(e) => setValues({ ...values, fname: e.target.value })}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="">Last Name:</label>
            <input
              type="text"
              className="form-control"
              value={values.lname}
              onChange={(e) => setValues({ ...values, lname: e.target.value })}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="">Father Name</label>
            <input
              type="text"
              className="form-control"
              value={values.father}
              onChange={(e) => setValues({ ...values, father: e.target.value })}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="">Program</label>
            <input
              type="text"
              className="form-control"
              value={values.program}
              onChange={(e) =>
                setValues({ ...values, program: e.target.value })
              }
            />
          </div>
          <div className="mb-1">
            <label htmlFor="">Semester</label>
            <input
              type="text"
              className="form-control"
              value={values.semester}
              onChange={(e) =>
                setValues({ ...values, semester: e.target.value })
              }
            />
          </div>
          <div className="mb-1">
            <label htmlFor="">Cnic</label>
            <input
              type="text"
              className="form-control"
              value={values.cnic}
              onChange={(e) => setValues({ ...values, cnic: e.target.value })}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="">Type</label>
            <input
              type="text"
              className="form-control"
              value={values.type}
              onChange={(e) => setValues({ ...values, type: e.target.value })}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="">Email</label>
            <input
              type="text"
              className="form-control"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="">Phone</label>
            <input
              type="text"
              className="form-control"
              value={values.phone}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="">dob</label>
            <input
              type="text"
              className="form-control"
              value={values.dob}
              onChange={(e) => setValues({ ...values, dob: e.target.value })}
            />
          </div>
          <div className="mb-1">
            <label htmlFor="">Address</label>
            <input
              type="text"
              className="form-control"
              value={values.address}
              onChange={(e) =>
                setValues({ ...values, address: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn btn-secondary">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;

import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import axios from "axios";
function Events() {
  const [EventData, setEventData] = useState([]);
  const baseURL = "http://localhost:4000";

  useEffect(() => {
    fetchEventData();
  }, []);

  const fetchEventData = async () => {
    const response = await axios.get(`${baseURL}/events`);
    setEventData(response.data);
    console.log(response.data);
  };

  // const handledelete = (id) => {
  //   try {
  //     axios.delete('http://localhost:4000/delete/' + id).then((res) => {
  //       navigate('/')
  //     })
  //   } catch (error) {
  //     console.error('Error deleting data:', error)
  //   }
  // }

  let dateOnly = "";
  return (
    <div
      className="container-fluid min-vh-100 "
      style={{ backgroundColor: " #060717", color: "white" }}
    >
      <div className="row ">
        <div className="col-4 col-md-2 vh-100">
          <Sidebar />
        </div>
        <div className="col-8 col-md-10 border-start border-dark">
          <Header />
          {EventData.length === 0 ? (
            <h4 className="text-center mt-5">No record found</h4>
          ) : (
            <table className="table caption-top table-dark table-hover rounded mt-2">
              <caption className="text-white fs-4">Events</caption>
              <thead>
                <tr>
                  <th scope="col">Serial No</th> <th scope="col">title</th>
                  <th scope="col">caption</th>
                  <th scope="col">image</th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                {EventData.map((data) => (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.title}</td>
                    <td>{data.caption}</td>
                    <td>
                      {data.event_img ? (
                        <img
                          src={`${baseURL}${data.event_img}`}
                          alt={data.title}
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        "No image"
                      )}
                    </td>
                    <td>
                      {
                        (dateOnly = new Date(data.date)
                          .toISOString()
                          .split("T")[0])
                      }
                    </td>
                    <td>{data.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Events;

import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Sidebar from './Sidebar'
import axios from 'axios'
function Student() {
  const [students, setStudents] = useState([])
  const [searchValue, setSearchValue] = useState([])
  console.log(searchValue)
  const navigate = useNavigate()

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = async () => {
    const response = await axios.get('http://localhost:4000/students')
    setStudents(response.data)
    console.log(response.data)
  }

  console.log(window.confirm)

  const handledelete = (id) => {
    window.confirm('Are you sure to delete it')
    if (window.confirm === 'cancel') return
    try {
      axios.delete('http://localhost:4000/delete/' + id).then((res) => {
        console.log(res)
        navigate('/')
      })
    } catch (error) {
      console.error('Error deleting data:', error)
    }
  }

  return (
    <div
      className='container-fluid min-vh-100 '
      style={{ backgroundColor: ' #060717', color: 'white' }}>
      <div className='row '>
        <div className='col-4 col-md-2 vh-100'>
          <Sidebar />
        </div>
        <div className='col-md-10 border-start border-dark'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='mb-2 mt-5'>
                <input
                  type='text'
                  className='form-control '
                  placeholder='Search By Cnic'
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </div>
            </div>
          </div>
          <table className='table caption-top table-dark table-hover rounded mt-2'>
            <caption className='text-white fs-4'>Recent Orders</caption>
            <thead>
              <tr>
                <th scope='col'>Serial No</th> <th scope='col'>First Name</th>
                <th scope='col'>Last Name</th>
                <th scope='col'>Cnic No</th> <th scope='col'>Type</th>
                <th scope='col'>Validate</th>
                <th scope='col'>Authorization</th>
                <th scope='col'>Update</th>
              </tr>
            </thead>
            <tbody>
              {students
                .filter((item) => {
                  return searchValue === ''
                    ? item
                    : item.cnic.includes(searchValue)
                })
                .map((student) => (
                  <tr key={student.Id}>
                    <td>{student.std_id}</td>
                    <td>{student.first_name}</td>
                    <td>{student.last_name}</td>
                    <td>{student.cnic}</td>
                    <td>{student.type}</td>
                    <td>
                      <Link to={`/SignForm/${student.cnic}`}>
                        <button className='btn btn-primary'>Form</button>
                      </Link>
                    </td>
                    <td>
                      <Link to={`/StudentCard/${student.cnic}`}>
                        <button className='btn btn-warning'>
                          {student.status === 'pending'
                            ? 'pending'
                            : 'registered'}
                        </button>
                      </Link>
                    </td>
                    <td>
                      <Link to={`/Update/${student.cnic}`}>
                        <button className='btn btn-success'>Edit</button>
                      </Link>
                      &nbsp;&nbsp;&nbsp;
                      <button
                        className='btn btn-danger'
                        onClick={() => handledelete(student.std_id)}>
                        X
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Student

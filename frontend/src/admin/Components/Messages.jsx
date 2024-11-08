import { useEffect, useState } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import axios from 'axios'
function Messages() {
  const [messageData, setMessageData] = useState([])

  useEffect(() => {
    fetchMessageData()
  }, [])

  const fetchMessageData = async () => {
    const response = await axios.get('http://localhost:4000/message')
    setMessageData(response.data)
    console.log(response.data)
  }

  // const handledelete = (id) => {
  //   try {
  //     axios.delete('http://localhost:4000/delete/' + id).then((res) => {
  //       navigate('/')
  //     })
  //   } catch (error) {
  //     console.error('Error deleting data:', error)
  //   }
  // }

  return (
    <div
      className='container-fluid min-vh-100 '
      style={{ backgroundColor: ' #060717', color: 'white' }}>
      <div className='row '>
        <div className='col-4 col-md-2 vh-100'>
          <Sidebar />
        </div>
        <div className='col-8 col-md-10 border-start border-dark'>
          <Header />
          {messageData.length === 0 ? (
            <h4 className='text-center mt-5'>No record found</h4>
          ) : (
            <table className='table caption-top table-dark table-hover rounded mt-2'>
              <caption className='text-white fs-4'>Messages</caption>
              <thead>
                <tr>
                  <th scope='col'>Serial No</th>
                  <th scope='col'>name</th>
                  <th scope='col'>email</th>
                  <th scope='col'>Message</th>
                </tr>
              </thead>
              <tbody>
                {messageData.map((data) => (
                  <tr key={data.id}>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  )
}

export default Messages

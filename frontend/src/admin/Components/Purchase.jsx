import Header from './Header'
import Sidebar from './Sidebar'
function Purchase() {
  return (
    <div className='container-fluid min-vh-100 '>
      <div className='row '>
        <div className='col-4 col-md-2 bg-white vh-100'>
          <Sidebar />
        </div>
        <div className='col-8 col-md-10 border-start border-dark'>
          <Header />
          <table className='table caption-top table-dark table-hover rounded mt-2'>
            <caption className='text-dark fs-4'>Recent Orders</caption>
            <thead>
              <tr>
                <th scope='col'>Serial No</th> <th scope='col'>Name</th>
                <th scope='col'>Department</th>
                <th scope='col'>Authorization</th>
                <th scope='col'>Update</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th> <td>Mark</td> <td>Otto</td>
                <td>
                  <i className='bi bi-check-lg'></i>&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className='bi bi-x-lg'></i>
                </td>
                <td>
                  <i className='bi bi-pencil-fill'></i>
                </td>
              </tr>
              <tr>
                <th scope='row'>1</th> <td>Mark</td> <td>Otto</td>
                <td>
                  <i className='bi bi-check-lg'></i>&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className='bi bi-x-lg'></i>
                </td>
                <td>
                  <i className='bi bi-pencil-fill'></i>
                </td>
              </tr>
              <tr>
                <th scope='row'>1</th> <td>Mark</td> <td>Otto</td>
                <td>
                  <i className='bi bi-check-lg'></i>&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className='bi bi-x-lg'></i>
                </td>
                <td>
                  <i className='bi bi-pencil-fill'></i>
                </td>
              </tr>
              <tr>
                <th scope='row'>1</th> <td>Mark</td> <td>Otto</td>
                <td>
                  <i className='bi bi-check-lg'></i>&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className='bi bi-x-lg'></i>
                </td>
                <td>
                  <i className='bi bi-pencil-fill'></i>
                </td>
              </tr>
              <tr>
                <th scope='row'>1</th> <td>Mark</td> <td>Otto</td>
                <td>
                  <i className='bi bi-check-lg'></i>&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className='bi bi-x-lg'></i>
                </td>
                <td>
                  <i className='bi bi-pencil-fill'></i>
                </td>
              </tr>
              <tr>
                <th scope='row'>1</th> <td>Mark</td> <td>Otto</td>
                <td>
                  <i className='bi bi-check-lg'></i>&nbsp;&nbsp;&nbsp;&nbsp;
                  <i className='bi bi-x-lg'></i>
                </td>
                <td>
                  <i className='bi bi-pencil-fill'></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Purchase

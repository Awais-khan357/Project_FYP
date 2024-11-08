import './SignForm.css'
import head from './head.png'

const StudentForm = ({ students }) => {
  const current = new Date()
  const nxtYear = current.getFullYear()
  const getCurrentDate = () => {
    const today = new Date()
    const day = String(today.getDate()).padStart(2, '0')
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const year = today.getFullYear()
    return `${day}/${month}/${year}`
  }
  return (
    <div className='container-fluid contains'>
      <div className='row justify-content-center'>
        <div className='col-md-9 px-5 mt-5 bg-white data'>
          <div className='row'>
            <div className='col-md-12'>
              <img src={head} alt='uni' />
            </div>
          </div>
          <form>
            <div className='form-group row'>
              <label htmlFor='name' className='col-sm-2 col-form-label'>
                Name
              </label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  value={`${students.first_name} ${students.last_name}`}
                  className='dashed-input'
                  id='name'
                />
              </div>
            </div>

            <div className='form-group row'>
              <label htmlFor='fatherName' className='col-sm-2 col-form-label'>
                Father’s Name
              </label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  value={students.father_name}
                  className='dashed-input'
                  id='fatherName'
                />
              </div>
            </div>

            <div className='form-group row'>
              <label htmlFor='department' className='col-sm-2 col-form-label'>
                Department
              </label>
              <div className='col-sm-5'>
                <input
                  type='text'
                  value={students.program}
                  className='dashed-input'
                  id='department'
                />
              </div>
              <label htmlFor='class' className='col-sm-1 col-form-label'>
                Semester
              </label>
              <div className='col-sm-4'>
                <input
                  type='text'
                  value={students.semester}
                  className='dashed-input'
                  id='class'
                />
              </div>
            </div>

            <div className='form-group row'>
              <label htmlFor='programme' className='col-sm-2 col-form-label'>
                Programme
              </label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  value={`BS ${students.program}`}
                  className='dashed-input'
                  id='programme'
                />
              </div>
            </div>

            <div className='form-group row'>
              <label htmlFor='issueDate' className='col-sm-2 col-form-label'>
                Issue Date
              </label>
              <div className='col-sm-4'>
                <input
                  type='text'
                  value={getCurrentDate()}
                  className='dashed-input'
                  id='issueDate'
                />
              </div>
              <label htmlFor='validDate' className='col-sm-2 col-form-label'>
                Valid Date
              </label>
              <div className='col-sm-4'>
                <input
                  type='text'
                  value={nxtYear + 1}
                  className='dashed-input'
                  id='validDate'
                />
              </div>
            </div>

            <div className='form-group row'>
              <label htmlFor='dob' className='col-sm-2 col-form-label'>
                Date of Birth
              </label>
              <div className='col-sm-3'>
                <input
                  type='text'
                  value={students.dob}
                  className='dashed-input'
                  id='dob'
                />
              </div>
              <label htmlFor='session' className='col-sm-2 col-form-label'>
                C.N.I.C No
              </label>
              <div className='col-sm-5'>
                <input
                  type='text'
                  value={students.cnic}
                  className='dashed-input'
                  id='session'
                />
              </div>
            </div>

            <div className='form-group row'>
              <label htmlFor='address' className='col-sm-2 col-form-label'>
                Permanent Address
              </label>
              <div className='col-sm-10'>
                <textarea
                  className='dashed-input'
                  id='address'
                  value={students.address}
                  rows='2'></textarea>
              </div>
            </div>

            <div className='form-group row'>
              <label htmlFor='hostel' className='col-sm-2 col-form-label'>
                For Boarder Name of hostel
              </label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  className='dashed-input'
                  value='D-block'
                  id='session'
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='room' className='col-sm-2 col-form-label'>
                Room No
              </label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  value='112'
                  className='dashed-input'
                  id='room'
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='scholar' className='col-sm-2 col-form-label'>
                Day Scholar
              </label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  value=''
                  className='dashed-input'
                  id='scholar'
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='session' className='col-sm-2 col-form-label'>
                Cell No
              </label>
              <div className='col-sm-10'>
                <input
                  type='text'
                  value={students.phone}
                  className='dashed-input'
                  id='session'
                />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='session' className='col-sm-2 col-form-label'>
                Blood Group
              </label>
              <div className='col-sm-3'>
                <input
                  type='text'
                  value='O positive'
                  className='dashed-input'
                  id='session'
                />
              </div>
              <label htmlFor='session' className='col-sm-2 col-form-label'>
                Session
              </label>
              <div className='col-sm-5'>
                <input
                  type='text'
                  value={`${nxtYear} / ${nxtYear + 1}`}
                  className='dashed-input'
                  id='session'
                />
              </div>
            </div>
          </form>
          <div className='row mt-5'>
            <div className='col-md-12'>
              <p className='fs-5 font-weight-normal text-dark'>
                Note : A recent passport size photograph must be attached with
                online submission of form. The student &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; must submit the
                application form in the concered Department.
              </p>
            </div>
          </div>
          <div className='row sign'>
            <div className='col-md-3 d-flex'>
              <p className='fs-5 font-weight-bold text-darkn student'>
                Student_Signature
              </p>
              <p className='fs-5 font-weight-bold text-dark chairman'>
                Chairman/Director
              </p>
              <p className='fs-5 font-weight-bold text-dark text-center provost'>
                Provost
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentForm

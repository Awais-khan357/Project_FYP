import head from './head.png'
function VpnSign({ students }) {
  console.log(students)
  return (
    <div className='container-fluid contains'>
      <div className='row justify-content-center'>
        <div className='col-md-9 px-5 mt-5 bg-white data'>
          <div className='row'>
            <div className='col-md-12'>
              <img src={head} alt='head' />
            </div>
          </div>
          <div className='form-group row'>
            <label htmlFor='name' className='col-sm-2 col-form-label'>
              Name
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                value={`${students.fname} ${students.lname}`}
                className='dashed-input'
                id='name'
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
                value={students.department}
                className='dashed-input'
                id='department'
              />
            </div>
            <label htmlFor='class' className='col-sm-1 col-form-label'>
              Registration
            </label>
            <div className='col-sm-4'>
              <input
                type='text'
                value={students.registration}
                className='dashed-input'
                id='class'
              />
            </div>
          </div>

          <div className='form-group row'>
            <label htmlFor='programme' className='col-sm-2 col-form-label'>
              Email
            </label>
            <div className='col-sm-10'>
              <input
                type='text'
                value={students.email}
                className='dashed-input'
                id='programme'
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

export default VpnSign

import './SignForm.css'
import employee from './employee.png'

const EmployeeForm = () => {
  return (
    <div className='container-fluid contains'>
      <div className='row justify-content-center'>
        <div className='col-md-9 px-5 mt-5 bg-white data'>
          <div className='row'>
            <div className='col-md-12'>
              <img src={employee} alt='emp' />
            </div>
          </div>
          <form>
            <div className='form-group row'>
              <label htmlFor='name' className='col-sm-2 col-form-label'>
                Name
              </label>
              <div className='col-sm-10'>
                <input type='text' className='dashed-input' id='name' />
              </div>
            </div>

            <div className='form-group row'>
              <label htmlFor='fatherName' className='col-sm-2 col-form-label'>
                Father’s Name
              </label>
              <div className='col-sm-10'>
                <input type='text' className='dashed-input' id='fatherName' />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='cnic' className='col-sm-2 col-form-label'>
                CNIC
              </label>
              <div className='col-sm-5'>
                <input type='text' className='dashed-input' id='cnic' />
              </div>
              <label htmlFor='cnic' className='col-sm-2 col-form-label'>
                DOB
              </label>
              <div className='col-sm-3'>
                <input type='text' className='dashed-input' id='cnic' />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='designation' className='col-sm-2 col-form-label'>
                Designation
              </label>
              <div className='col-sm-10'>
                <input type='text' className='dashed-input' id='designation' />
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
                  rows='2'></textarea>
              </div>
            </div>

            <div className='form-group row'>
              <label htmlFor='session' className='col-sm-2 col-form-label'>
                Date of regular Employement
              </label>
              <div className='col-sm-10'>
                <input type='text' className='dashed-input' id='session' />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='session' className='col-sm-2 col-form-label'>
                Blood Group
              </label>
              <div className='col-sm-10'>
                <input type='text' className='dashed-input' id='session' />
              </div>
            </div>
            <div className='form-group row'>
              <label htmlFor='session' className='col-sm-2 col-form-label'>
                Contact NO
              </label>
              <div className='col-sm-10'>
                <input type='text' className='dashed-input' id='session' />
              </div>
            </div>
          </form>
          <div className='row mt-5'>
            <div className='col-md-12'>
              <p className='fs-5 font-weight-normal text-dark'>
                Note : A recent passport size photograph must be attached with
                online submission of form.
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

export default EmployeeForm

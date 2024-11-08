import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Card() {
  const { cnic } = useParams()
  const [student, setStudent] = useState(null)

  useEffect(() => {
    fetchStudentData()
  }, [cnic])

  const fetchStudentData = async () => {
    const response = await axios.get(`http://localhost:4000/students/${cnic}`)
    setStudent(response.data)
  }

  if (!student) {
    return <div>Loading...</div>
  }

  return (
    <div className='student-card'>
      <h1>
        {student.fname} {student.lname}
      </h1>
      <p>CNIC: {student.cnic}</p>
      <p>Department: {student.program}</p>
      <p>Status: {student.status === 1 ? 'Approve' : 'Registered'}</p>
    </div>
  )
}

export default Card

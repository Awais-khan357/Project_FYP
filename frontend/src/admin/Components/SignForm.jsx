import StudentForm from './StudentForm'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const SignForm = () => {
  const [students, setStudents] = useState([])
  const { cnic } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentResponse = await axios.get(
          `http://localhost:4000/students/${cnic}`,
        )
        setStudents(studentResponse.data)
        console.log(`Student data fetched successfully for CNIC: ${cnic}`)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [cnic])

  return <StudentForm students={students} />
}

export default SignForm

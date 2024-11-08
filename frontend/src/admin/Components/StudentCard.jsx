import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import CardFront from './CardFront'
function StudentCard() {
  const [students, setStudents] = useState([])
  const { cnic } = useParams()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentResponse = await axios.get(
          `http://localhost:4000/students/${cnic}`,
        )
        setStudents(studentResponse.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [cnic])

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios.put(`http://localhost:4000/students/${cnic}`)
      } catch (error) {
        console.error('Error updating status:', error)
      }
    }

    fetchData()
  }, [cnic])

  return (
    <div className='container-fluid'>
      <div className='row'>
        <CardFront students={students} />
      </div>
    </div>
  )
}

export default StudentCard

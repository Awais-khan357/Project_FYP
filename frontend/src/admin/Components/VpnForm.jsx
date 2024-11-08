import VpnSign from './VpnSign'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const VpnForm = () => {
  const [students, setStudents] = useState([])
  const { registration } = useParams()
  console.log(registration)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentResponse = await axios.get(
          `http://localhost:4000/vpn/${registration}`,
        )
        setStudents(studentResponse.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [registration])

  // const current = new Date()
  // const nxtYear = current.getFullYear()
  // const getCurrentDate = () => {
  //   const today = new Date()
  //   const day = String(today.getDate()).padStart(2, '0')
  //   const month = String(today.getMonth() + 1).padStart(2, '0')
  //   const year = today.getFullYear()
  //   return `${day}/${month}/${year}`
  // }

  return <VpnSign students={students} />
}

export default VpnForm

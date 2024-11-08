import './Frontside.css'
import person from './person.jpg'
import sign from './sign.png'
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import html2canvas from 'html2canvas'

export default function Frontside({ students }) {
  console.log(students)
  // const [barcodeUrl, setBarcodeUrl] = useState('')
  const cardRef = useRef(null)
  const cnic = students.cnic

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       console.log(`Fetching barcode for CNIC: ${cnic.replace(/-/g, '')}`)
  //       const barcodeResponse = await axios.get(
  //         `https://bwipjs-api.metafloor.com/?bcid=code128&text=${cnic.replace(/-/g, '')}&scale=3&includetext`,
  //       )
  //       setBarcodeUrl(barcodeResponse.request.responseURL)
  //       console.log(
  //         `Barcode fetched successfully for CNIC: ${cnic.replace(/-/g, '')}`,
  //       )
  //     } catch (error) {
  //       console.error('Error fetching data:', error)
  //     }
  //   }

  //   fetchData()
  // }, [cnic])

  const getCurrentDate = () => {
    const today = new Date()
    const day = String(today.getDate()).padStart(2, '0')
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const year = today.getFullYear()
    return `${day}/${month}/${year}`
  }

  const handleDownload = () => {
    if (cardRef.current) {
      html2canvas(cardRef.current, {
        scale: 4, // Increase scale for higher resolution
        useCORS: true, // Ensure to use CORS for handling external images
        logging: true, // Enable logging for troubleshooting
        width: 302, // Set desired width
        height: 488, // Set desired height
      })
        .then((canvas) => {
          const link = document.createElement('a')
          link.href = canvas.toDataURL('image/png', 1.0) // Set image quality to 1.0 (highest quality)
          link.download = 'student_card.png'
          link.click()
        })
        .catch((error) => {
          console.error('Error generating card:', error)
        })
    }
  }

  const currentDate = getCurrentDate()

  return (
    <div className='container'>
      <div className='padding'>
        <div className='font' ref={cardRef}>
          <div className='top'>
            <img className='user' src={person} alt='first' />
          </div>
          <div className='bottom'>
            <p className='name'>{students.first_name}</p>
            <p>
              <span className='desc'>{students.program}</span>
            </p>
            <div className='row'>
              <div className='col-md-12 barcode'>
                {
                  /* {barcodeUrl ? (
                  <img src={barcodeUrl} alt='Barcode' />
                ) : (
                  'Loading barcode...'
                )} */ <img src='barcode' alt='Barcode' />
                }
              </div>
              <div className='col-md-6 mt-5'>
                <p className='text'>
                  Date of issue: <span>{currentDate}</span>
                  <br />
                  Valid Upto: <span>{students.expirey_date}</span>
                </p>
              </div>
              <div className='col-md-6 mt-4'>
                <img src={sign} alt='sign' className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className='btn btn-primary mt-3 px-2' onClick={handleDownload}>
        Download Card
      </button>
    </div>
  )
}

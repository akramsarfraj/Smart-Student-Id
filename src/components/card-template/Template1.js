import React, { useContext, useRef } from 'react'
import DetailContext from '../../util/DetailContext'
import { QRCodeSVG } from 'qrcode.react';
import { toPng } from 'html-to-image';


function Template1() {

  let { img, studentData } = useContext(DetailContext)

  let ref = useRef()
  

  let download =()=>{
      
        
        toPng(ref.current,{ cacheBust: true,})
        .then((dataUrl)=>{
           
            
            const link = document.createElement('a')
            link.download = 'ID Card.png'
            link.href = dataUrl
            link.click()
          })
          .catch((err) => {
            console.log("error ::",err)
          })    
  }

  return (
    <div className='' style={{ display: "flex", justifyContent: "center", alignItems: 'center', height: "550px", gap: 40 }} >

      <div className='' ref={ref} style={{ display: "flex" }}>
        <div className='card' style={{ width: "300px", backgroundColor: "#a3e4d7 ", height: "450px", display: 'flex', justifyContent: "center", alignItems: "center" }}>
          {
            Object.keys(studentData).length !== 0 &&
            <>
              <img src={img} crossOrigin='*' style={{ border: "1px solid ", width: "100px", height: "100px", borderRadius: "5px" }} />
              <h3>{studentData.name}</h3>
              <p>Class :<b>{studentData.class}</b></p>
              <p style={{ textAlign: "center" }}>Allergies :<b>{studentData.allergies.toString()}</b></p>
              <p>Rack Number :<b>{studentData.rack_no}</b> </p>
              <p>Bus Route :<b>{studentData.bus_route}</b> </p>
            </>
          }

        </div>

        <div className='card' style={{ width: "300px", backgroundColor: "#a3e4d7 ", display: "flex", alignItems: 'center', justifyContent: 'center', height: "450px" }}>
          <QRCodeSVG value={JSON.stringify(studentData)} size={150} title='Student QR' />
        </div>
      </div>


      <button className='btn btn-success' style={{ marginLeft: "40px", marginTop: "20px" }} onClick={download} >Download</button>
    </div>
  )
}

export default Template1
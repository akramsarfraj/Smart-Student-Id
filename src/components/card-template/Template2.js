import React, { useContext, useRef } from 'react'
import DetailContext from '../../util/DetailContext';
import { QRCodeSVG } from 'qrcode.react';
import { toPng } from 'html-to-image';

function Template2() {
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
            console.log(err)
          })    
  }

  return (
    <div className='' style={{display:"flex",justifyContent:"center",alignItems:'center',backgroundColor:"#00CED1",height:"550px",gap:40}} >
        
        <div style={{display:"flex"}} ref={ref}>
        <div className='card' style={{width:"300px",background:'linear-gradient(45deg, #cac6f8 , #f8cac6 50%, #c6f8ca 100%)',display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"monospace" , height:"450px"}}>
        {
          Object.keys(studentData).length !== 0 &&
          <>
            <img src={img} style={{ border: "1px solid ", width: "120px", height: "120px", borderRadius: "50%" }} />
            <h3>{studentData.name}</h3>
            <p>Class :<b>{studentData.class}</b></p>
            <p style={{textAlign:"center"}}>Allergies :<b>{studentData.allergies.toString()}</b></p>
            <p>Rack Number :<b>{studentData.rack_no}</b> </p>
            <p>Bus Route :<b>{studentData.bus_route}</b> </p>
          </>
        }
        </div>

        <div className='card' style={{width:"300px",display:'flex',alignItems:"center",justifyContent:"center" ,background:'linear-gradient(45deg, #cac6f8 , #f8cac6 50%, #c6f8ca 100%)', height:"450px"}}>
           <QRCodeSVG value={JSON.stringify(studentData)} size={150} title='Student QR' />
        </div>
        </div>
        

        <button className='btn btn-success' style={{marginLeft:"40px",marginTop:"20px"}} onClick={download} >Download</button>
    </div>
  )
}

export default Template2
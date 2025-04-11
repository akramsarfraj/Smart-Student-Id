import React, {useState } from 'react'
import DetailContext from './DetailContext'



function StudentContext({children}) {

  let [studentData,setStudentData] = useState({})
  let [img ,setImg] = useState("")
  let contextData = {
    studentData,
    setStudentData,
    img,
    setImg
  }

  return (
   <DetailContext.Provider value={contextData}>
    {children}
   </DetailContext.Provider>
  )
}

export default StudentContext
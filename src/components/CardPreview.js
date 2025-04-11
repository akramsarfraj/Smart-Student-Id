import React, { useContext, useState } from 'react'
import Template1 from './card-template/Template1';
import Template2 from './card-template/Template2';
import DetailContext from '../util/DetailContext';


function CardPreview() {

    let [template, setTemplate] = useState("template 1")

    let { studentData } = useContext(DetailContext)

    return (
        <div className=''>

            <div className='form-group' style={{ width: "200px", marginLeft: "40px", marginBottom: "20px" }}>
                <label>Select Template:</label>
                <select className='form-select' value={template} onChange={(e) => { setTemplate(e.target.value) }}>
                    <option value="template 1">Template 1</option>
                    <option value="template 2">Template 2</option>
                </select>
            </div>

            {
                Object.keys(studentData).length === 0 ?
                    <div>
                        <h3>No Card Available to Preview</h3>
                    </div> :

                    <div className='card' style={{ height: "550px", marginLeft: "40px", marginRight: "40px" }}>

                        {
                            template === "template 2" ? <Template2 /> : <Template1 />
                        }

                    </div>
            }

        </div>
    )
}

export default CardPreview
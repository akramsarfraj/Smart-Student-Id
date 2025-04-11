import React, { memo, useContext, useState } from 'react'
import Select from 'react-select';
import DetailContext from '../util/DetailContext';
import { useNavigate } from 'react-router-dom';

const options = [
    { value: 'None', label: 'None' },
    { value: 'Milk/Dairy', label: 'Milk/Dairy' },
    { value: 'Peanuts', label: 'Peanuts' },
    { value: 'Dust', label: 'Dust' },
    { value: 'Egg', label: 'Egg' },
    { value: 'Fish', label: 'Fish' },
    { value: 'Pet dander', label: 'Pet dander' },
];

function IdCardForm() {
    

    let navigate = useNavigate()

    let { setStudentData, setImg } = useContext(DetailContext)

 
    const [base64Image, setBase64Image] = useState("");


    let [formData, setFormData] = useState({
        name: "",
        roll_no: "",
        class: "",
        allergies: [],
        rack_no: "",
        bus_route: "",
    })

    let handleFile = (e) => {

        const file = e.target.files[0];
        if (!file) {
            console.warn('No file selected');
            return;
        }

        const reader = new FileReader();

        reader.onloadend = () => {
            setBase64Image(reader.result); // 👈 base64 string here
            console.log('Base64 URL:', reader.result); // helpful for debugging
        };

        reader.onerror = (error) => {
            console.error('Error reading file:', error);
        };

        reader.readAsDataURL(file);
     
    }


    let handleForm = () => {
        setStudentData(formData)
        setImg(base64Image)

        let listStudent = localStorage.getItem("students");
        let id = Math.floor((Math.random() * 100) + 1);
        if (listStudent === null) {
            let data = [{ ...formData, id: id }]
            localStorage.setItem("students", JSON.stringify(data))
        } else {
            let data = JSON.parse(listStudent)
            data = [...data, { ...formData, id: id }]
            localStorage.setItem("students", JSON.stringify(data))
        }

        navigate('/preview')
    }


    return (
        <div className=''>
            <div className="container" style={{ marginTop: "20px" }} >
                <h2>Student Form</h2>
                <p>Enter the student detail to Generate ID Card</p>
                <form action={handleForm} style={{ display: "flex", flexDirection: "column", gap: "10" }}>
                    <div className="form-group">
                        <label>Student Name:</label>
                        <input type="text" className="form-control form-control-sm" onChange={(e) => { setFormData({ ...formData, 'name': e.target.value.toUpperCase() }) }} required />
                    </div>
                    <div className="form-group">
                        <label>Roll Number:</label>
                        <input type="number" className="form-control form-control-sm" onChange={(e) => { setFormData({ ...formData, 'roll_no': e.target.value }) }} required />
                    </div>

                    <div className='form-group'>
                        <label>Class & Divsion:</label>
                        <select name="cars" className="form-select form-select-sm" onChange={(e) => { setFormData({ ...formData, 'class': e.target.value }) }} required>
                            <option value="">None</option>
                            {
                                [...Array(10)].map((e, i) => {
                                    return (
                                        <optgroup key={i} label={`Class ${i + 1}`}>
                                            <option>{i + 1}-A</option>
                                            <option>{i + 1}-B</option>
                                            <option>{i + 1}-C</option>
                                        </optgroup>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className='form-group'>
                        <label>Allergies:</label>

                        <Select options={options} defaultValue="None" className="basic-multi-select"
                            onChange={(e) => {
                                let a = []
                                e.forEach((e) => {
                                    a.push(e.value)

                                })
                                setFormData({ ...formData, 'allergies': a })
                            }}
                            classNamePrefix="select" isMulti />
                    </div>


                    <div className='form-group'>
                        <label className="form-label">Student Photo:</label>
                        <input className="form-control form-control-sm" onChange={handleFile} type="file" required />

                        <img src={base64Image} alt="" height="140px" width="200px" style={{ marginTop: "5px", borderRadius: "5px", display: base64Image === "" && "none" }}></img>
                    </div>


                    <div className="form-group">
                        <label>Rack Number:</label>
                        <input type="text" className="form-control form-control-sm" onChange={(e) => { setFormData({ ...formData, 'rack_no': e.target.value.toUpperCase() }) }} />
                    </div>

                    <div className='form-group'>
                        <label>Bus Route Number:</label>
                        <select name="cars" className="form-select form-select-sm" onChange={(e) => { setFormData({ ...formData, 'bus_route': e.target.value }) }}>
                            <option value="">None</option>
                            <option value="Route 101">Route 101</option>
                            <option value="Route B12">Route B12</option>
                            <option value="Route M20">Route M20</option>
                            <option value="Route R9">Route R9</option>
                            <option value="Route 77">Route 77</option>
                        </select>
                    </div>

                    <div style={{ display: "flex", justifyContent: "center", marginTop: "10px", "alignItems": "center" }}>
                        <button type="submit" className="btn btn-primary" >Submit</button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default memo(IdCardForm)
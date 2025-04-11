import { useContext } from 'react';
import './App.css';
import IdCardForm from './components/IdCardForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailContext from './util/DetailContext';
import CardPreview from './components/CardPreview';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Home from './components/Home';

function App() {

  let con = useContext(DetailContext)



  return (
    <div className="App">

      <BrowserRouter>
        <Navbar bg="dark" data-bs-theme="dark" style={{ marginBottom: "5px" }}>
          <Container>
            <Navbar.Brand href="/">HOME</Navbar.Brand>
            <Nav className="me-auto">
              <Link to="/form" style={{ textDecoration: 'none', color: "white" ,marginRight:"5px"}}>  StudentForm</Link>
              <Link to="/preview" style={{ textDecoration: 'none', color: "white" }}>  PreviewCard</Link>
            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/form' element={<IdCardForm />}></Route>
          <Route path='/preview' element={<CardPreview />}></Route>
        </Routes>
      </BrowserRouter>



    </div>
  );
}

export default App;

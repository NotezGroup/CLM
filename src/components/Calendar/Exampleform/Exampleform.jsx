import 'bootstrap/dist/css/bootstrap.min.css';
import {Form , Button, Row, Col} from "react-bootstrap";
import "./Exampleform.css";
import {useState} from 'react'




function Exampleform(props) {
  
  // Hjälp från https://dev.to/gamil91/function-component-react-form-submission-on-netlify-gab
  
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    date: props.dayValue,
    time: "",
    descr: ""
});





const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}



const handleSubmit = e => {
    props.addBooking();

      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact-form", ...formData })
    })
    .then(() => props.showSuccess())
    
    .catch(error => console.log(error));

  e.preventDefault();
  }


  const handleChange = e => {
    const { name, value } = e.target
    setFormData({
        ...formData, 
        [name]: value
    })
}


  


  return (
    <div >

      <div className='backdrop' />
      <div className='form-dialog'>


      
      <Form  onSubmit={handleSubmit}  >
      

      <Row className="mb-4">
        <h2>Book your time</h2>
        <p className='price'>Price:</p>
        <p className='price'>First time treatment is 1500 SEK (Membership is included)</p>
        <p>Once first time treatment is payed you will be a member of my clinic. From there on the price will only be 750 SEK / treatment</p>
      </Row>

      <Row className="mb-4"></Row>

      <Row className="mb-4">
        <Form.Group as={Col} md="3" controlId="validationCustom01">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="..."
      
            name="firstname"
            value={formData.firstname} 
            onChange={handleChange}
          />
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom02">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="..."
            
            name="lastname"
            value={formData.lastname} 
            onChange={handleChange}
          />
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="6" >
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" placeholder="namn@exempel.com" required name="email" value={formData.email}  onChange={handleChange}/>
          <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>
       
      </Row>

      <Row className="mb-4"></Row>


      <Row className="mb-3">
        <Form.Group as={Col} md="6" >
          <Form.Label >Desired date</Form.Label>
          <Form.Control  type="text"   required    value={formData.date}  readOnly  name="date" onChange={handleChange} />
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustom04">
          <Form.Label>Choose desired time</Form.Label>
          <Form.Select name="time" value={formData.time} required onChange={handleChange}>
            <option id="no-options" value=""></option>
            <option id="12:00 - 13:00" value="12:00 - 13:00">12:00 - 13:00</option>
            <option id="13:00 - 14:00" value="13:00 - 14:00">13:00 - 14:00</option>
            <option id="14:00 - 15:00" value="14:00 - 15:00">14:00 - 15:00</option>
            <option id="15:00 - 16:00" value="15:00 - 16:00">15:00 - 16:00</option>
            <option id="16:00 - 17:00" value="16:00 - 17:00">16:00 - 17:00</option>
            <option id="17:00 - 18:00" value="17:00 - 18:00">17:00 - 18:00</option>
            <option id="18:00 - 19:00" value="18:00 - 19:00">18:00 - 19:00</option>
          </Form.Select>
        </Form.Group>
        
      </Row>


      <Row className="mb-4"></Row>


      <Row className="mb-2">
        <Form.Group className="mb-1"  >
        <Form.Label>Describe your issue</Form.Label>
        <Form.Control id="description1" as="textarea" rows={2} name="descr" value={formData.descr}   required onChange={handleChange}/>
        </Form.Group>
      </Row>


      {/* <Row className="mb-2">
      <Form.Group className="mb-3">
        <Form.Check
        
          // required="true"
          label="Okej med en annan tillgänglig tid denna dag"
          // feedback=""
          // feedbackType="invalid"
          name="Okej med annan tid:"
          value=""
        />
      </Form.Group>
      </Row> */}

      
      <Button  className='btn-primary btnSend'   type="submit"  >Book</Button>
      <Button className='btn-primary' onClick={props.cancelForm}>Cancel</Button>
     

    

    </Form>
    
      </div>
    </div>
  );
}

export default Exampleform;



import { useEffect, useState } from "react";
import "./EmployeeCreation.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const EmployeeCreation = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(
        "https://backend-employees-hqf0.onrender.com/employees/create",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      console.log("Employee added!", data);
      navigate("/");
    } catch (error) {
      console.log("An error occurred: ", error.message);
    }

    console.log(formData);
  };

  return (
    <div className="center-form">
      <h1>Add New Employee</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="text"
            name="name"
            placeholder="Employee's name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="email"
            name="email"
            placeholder="Employee's email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="text"
            name="phone"
            placeholder="Employee's phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="text"
            name="department"
            placeholder="Employee's department"
            value={formData.department}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="w-100">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default EmployeeCreation;

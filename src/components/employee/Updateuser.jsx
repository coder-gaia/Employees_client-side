import "./UpdateUser.css";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate, useParams } from "react-router-dom";

const Updateuser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
  });
  const { id: empId } = useParams();
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    const getEmployee = async () => {
      try {
        const res = await fetch(
          `https://backend-employees-hqf0.onrender.com/employees/getEmployee/${empId}`
        );
        const data = await res.json();
        setFormData(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getEmployee();
  }, [empId]);

  //updates the emp infos
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        `https://backend-employees-hqf0.onrender.com/employees/employee/${empId}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      console.log("User updated: ", data);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="center-form">
      <h1>Update Employee Informations</h1>
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
          Update
        </Button>
      </Form>
    </div>
  );
};

export default Updateuser;

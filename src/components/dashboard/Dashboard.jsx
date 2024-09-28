import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getAllEmployees = async () => {
      try {
        const res = await fetch(
          "https://backend-employees-hqf0.onrender.com/employees/getAll"
        );
        const data = await res.json();

        setEmployees(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    getAllEmployees();
  }, []);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `https://backend-employees-hqf0.onrender.com/employees/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (res.ok) {
        setEmployees((prevEmployes) =>
          prevEmployes.filter((emp) => emp.id != id)
        );
      }

      console.log(`Employee with id: ${id} was successfully deleted!`);
    } catch (error) {
      console.log("An error occurred: " + error.message);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/employee/${id}`);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <h1 className="text-center">Employees</h1>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                {/* <th>ID</th> */}
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Department</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees ? (
                employees.map((employee) => (
                  <tr key={employee.name}>
                    {/* <td>{employee.id}</td> */}
                    <td>{employee.name}</td>
                    <td>{employee.email}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.department}</td>
                    <td>
                      <Button
                        variant="outline-secondary"
                        onClick={() => handleUpdate(employee.id)}
                      >
                        Update
                      </Button>
                      <Button
                        variant="outline-danger"
                        onClick={() => handleDelete(employee.id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <div>No employees were found.</div>
              )}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;

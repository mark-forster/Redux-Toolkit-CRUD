import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from '../features/user/userSlice';
function Update() {
 
  const navigate = useNavigate();
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUsers = users.filter(user=> user.id == id);
 const { name, email}= existingUsers[0];
 const [newName, setnewName] = useState(name);
 const [newEmail, setnewEmail] = useState(email); 
 const dispatch= useDispatch();
  const handleUpdateUser = (e) => {
    e.preventDefault();
    dispatch(updateUser({
      id: id,
      name: newName,
      email: newEmail
    }));
    navigate('/')
  };

  return (
    <>
      <div className="container d-flex align-items-center justify-content-center">
        <Form
          className="w-50 mt-5 p-3 border border-primary"
          onSubmit={handleUpdateUser}
        >
          <h1 className="text-center fw-bolder text-info">Update User</h1>
          <Form.Group className="mb-3" controlId="formGroupText">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={newName}
              onChange={(e) => {
                setnewName(e.target.value)
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label> Enter Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              value={newEmail}
              onChange={(e) => {
                setnewEmail(e.target.value)
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Update;

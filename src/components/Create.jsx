import React, { useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import { addUser } from '../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Create() {
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const navigate= useNavigate();
  const users= useSelector((state)=> state.users);
const dispatch= useDispatch();
const handleCreateuser= (e)=>{
  e.preventDefault();
  dispatch(addUser({id: users[users.length -1].id + 1 , name ,email}));
  navigate('/')
}
  return (
    <>
    <div className="container d-flex align-items-center justify-content-center">
      <Form className='w-50 mt-5 p-3 border border-primary' onSubmit={handleCreateuser}>
        <h1 className="text-center fw-bolder text-info">Create New User</h1>
      <Form.Group className="mb-3" controlId="formGroupText">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" placeholder="Name" onChange={(e)=>{setname(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label> Enter Email</Form.Label>
        <Form.Control type="email" placeholder="Email" onChange={(e)=>{setemail(e.target.value)}}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Create
      </Button>
      </Form>
    </div>
    </>
  )
}

export default Create
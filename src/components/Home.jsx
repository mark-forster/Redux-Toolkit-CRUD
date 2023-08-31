import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import { removeUser } from '../features/user/userSlice';
const Home = () => {
    const users= useSelector((state)=>state.users);
    const dispatch= useDispatch();

  return (
    <>
    <div className="container mt-5">
            <h1>Hello React Redux (redux toolkit)</h1>
            <Link className="btn btn-primary" to='/create'> + create</Link>
            <table className="table bordered">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user,index)=>{
                       return(
                        <tr key={user.id}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/edit/${user.id}`} className='btn btn-primary'>Edit</Link>
                            <button className='mx-3 btn btn-danger'  onClick={()=>dispatch(removeUser(user.id))} >Delete</button>
                        </td>            
                    </tr>
                       )
                    })}
                </tbody>
            </table>
    </div>
    </>
  )
}

export default Home
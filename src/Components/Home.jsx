import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className="d-flex justify-content-center ">
            <img src="https://reactjs.org/logo-og.png" alt="React Logo" className='logo img-fluid' style={{ width: '50px', height: 'auto' }} />
        </div>
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr className="table-active">
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
            </tbody>
        </table>
        <div className="row text-white  w-100">
            <h1 className='bg-primary text-white p-2 w-100'>Home Page</h1>
            <div className="col-md-6 d-flex justify-content-end p-2 border border-primary">
                <Link to="/about"><button className='btn btn-primary '>About</button></Link>    
            </div>
            <div className="col-md-6 d-flex justify-content-start p-2 border border-primary">
                <Link to="/contact"><button className='btn btn-danger '>Contact</button></Link>    
            </div>
        </div>
    </div>
  )
}

export default Home
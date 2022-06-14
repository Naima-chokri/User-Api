import React from 'react'
import SingleUser from '../SingleUser/SingleUser'
import 'bootstrap/dist/css/bootstrap.min.css';


const ListUser = ({data}) => {
    console.log(data)
  return (
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="people-nearby">
                    {data.map(el=><SingleUser el1={el} /> )}  
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default ListUser
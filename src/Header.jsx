import React from 'react'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBInputGroup,
    MDBBtn
  } from 'mdb-react-ui-kit';
  
function Header() {
  return (
    <div>
        <MDBNavbar light style={{backgroundColor:'lightblue'}}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>
            <img
              src='https://lever-client-logos.s3.amazonaws.com/80afc263-40e7-4116-aa4f-2aa6ff04d9b3-1565040543848.png'
              height='50'
              alt=''
              loading='lazy'
            />
            
          </MDBNavbarBrand>
          <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
          <input className='form-control' placeholder="Search" aria-label="Search" type='Search' />
          <MDBBtn color='success'>Search</MDBBtn>
        </MDBInputGroup>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
import React from "react";
import ProfileCard from "./ProfileCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ContactList({ contactprops }) {
  return (

    <>

      {
        contactprops.length!=0 ? 
        contactprops.map(contactprops => (
          <ProfileCard contactprops={contactprops} key={contactprops.id} details={contactprops}  />
        ))
        :
        <>
          <Row>
            <Col xl={12} lg={12} md={12} sm={12} xs={12} className="noResults">
            <div className="animate__animated animate__tada"><span></span></div>
              <h4 className="animate__animated animate__fadeIn">No Results Found!</h4>
              <p className="animate__animated animate__fadeIn">Please try another search query</p>
            </Col>
          </Row>
        </>
      } 
      
    </>
    
  );
}
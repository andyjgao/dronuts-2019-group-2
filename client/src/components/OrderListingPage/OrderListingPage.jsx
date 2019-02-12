import React, { Component } from 'react';
import Order from './Order.jsx';

import { Container, Row, Col } from 'react-bootstrap';

class OrderListingPage extends Component {
  render() {
    return (
      <div className="olp">
<Container>
  <Row>
     <Col md={{ padding: 20}}>          
      <Order
          id="1"
          drone="1"
          donuts={[{id: 2, name:'Chocolate Frosted', quantity: 2},
                  {id: 3, name:'Boston Cream', quantity: 1}]}
          address="123 Main Street"
      />
    </Col>

     <Col md={{ padding: 20}}>      
        <Order
            id="2"
            drone="2"
            donuts={[{id: 1, name:'Glazed', quantity: 3}, {id: 3, name:'Boston Cream', quantity: 1}]}
            address="5000 Forbes Avenue"
          />
    </Col>
     <Col md={{ padding: 20}}>
          <Order
            id="3"
            drone="3"
            donuts={[{id: 2, name:'Chocolate Frosted', quantity: 1},{id: 1, name:'Glazed', quantity: 2},]}
            address="404 Wilkins Avenue"
          />
    </Col>
  </Row>
  <Row>
   <Col md={{ padding: 20}}>
            <Order
            id="3"
            drone="3"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},]}
            address="400 Wilkins Avenue"
          />
  </Col>
  
   <Col md={{ padding: 20}}>

            <Order
            id="3"
            drone="3"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},]}
            address="400 Wilkins Avenue"
          />
  </Col>
         <Col md={{ padding: 20}}>
          <Order
            id="3"
            drone="3"
            donuts={[{id: 1, name:'Glazed', quantity: 1}, {id: 2, name:'Chocolate Frosted', quantity: 2},]}
            address="400 Wilkins Avenue"
          />
    </Col>
  </Row>
</Container>

      </div>
    )
  }
}

export default OrderListingPage;
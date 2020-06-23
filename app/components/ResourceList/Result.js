import React from 'react';
import { capitalCase } from "change-case";
import styled from 'styled-components';

import A from 'components/Button';

const ResultItem = styled.div`
  border: 1px solid #E1E1E1;
  border-radius: 5px;
  box-shadow: -1px 4px 5px 0px rgba(0,0,0,0.10);
  margin-bottom: 2rem;
  padding: 1rem;
`;

const ResultTitle = styled.h4`
  font-size: 1.25rem;
  margin: 0;
`;

const ResultAddress = styled.p`
  color: #838383;
  margin-top: 0.5rem;
`;

class Result extends React.Component {
  constructor(props) {
    super(props);
    const address = this.props.resource.address_line_1 + ", " + this.props.resource.place_base_city_name;

    this.state = { 
      property_name: capitalCase(this.props.resource.property_name),
      address: address,
      property_on_site_phone_number: this.props.resource.property_on_site_phone_number
    };
  }

  render() {
    return(
      <ResultItem>
        <ResultTitle>{this.state.property_name}</ResultTitle>
        <ResultAddress>{this.state.address}</ResultAddress>
        <p>Phone: {this.state.property_on_site_phone_number}</p>
        <A href="#">View property details</A>
      </ResultItem>
    );
  }
}

export default Result;
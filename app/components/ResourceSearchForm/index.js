import React, { useEffect, memo } from 'react';
import styled from 'styled-components';

import Submit from 'components/Submit';

const FormLabel = styled.label`
  color: #ffffff;
  display: block;
  font-weight: bold;
`;

const PlaceInput = styled.input`
  border: 0;
  display: block;
  font-size: 1rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  outline: none;
  padding: 0.5rem;
  width: 100%;
`;

class ResearchSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleGeoInputChange = this.handleGeoInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleGeoInputChange(event) {
    this.setState({value: event.target.value});
    console.log(event.target.value)
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormLabel>
          Where would you like to look for housing assistance?
          <PlaceInput type="text" value={this.state.value} onChange={this.handleGeoInputChange} />
        </FormLabel>
        <div>
          <Submit type="submit" value="Search for housing" />
        </div>
      </form>
    );
  }
}

export default ResearchSearchForm;
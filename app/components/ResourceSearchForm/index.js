import React, { useEffect, memo } from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styled from 'styled-components';

import Submit from 'components/Submit';

const FormFieldset = styled.fieldset`
  border: 0;
  margin: 0;
  padding: 0;

`;

const FormLabel = styled.label`
  color: #ffffff;
  display: block;
  font-weight: bold;
`;

const FormLegend = styled.legend`
  color: #ffffff;
  display: block;
  font-weight: bold;
  margin: 0;
  padding: 0;
`;

const InputGroup = styled.div`
  margin-bottom: 1rem;
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

const RadioLabel = styled.label`
  color: #ffffff;
  display: inline-block;
  margin-left: 0.5rem;
`;

const SearchSubmit = styled(Submit)`
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
        <InputGroup>
          <FormFieldset>
            <FormLegend>
              1. <FormattedMessage {...messages.resourceInputLabel} />
            </FormLegend>
            <div>
              <div className="radio-group">
                <input id="affordable-housing" type="radio" name="resource-type" checked/>
                <RadioLabel htmlFor="affordable-housing">
                  <FormattedMessage {...messages.resourceLabelHousing} />
                </RadioLabel>
              </div>
              <div className="radio-group">
                <input id="shelter" type="radio" name="resource-type"/>
                <RadioLabel htmlFor="shelter">
                  <FormattedMessage {...messages.resourceLabelShelter} />
                </RadioLabel>
              </div>
            </div>
          </FormFieldset>
          <div>
          </div>
        </InputGroup>
        <InputGroup>
          <div>
            <FormLabel for="geo-input">
              2. <FormattedMessage {...messages.geoInputLabel} />
            </FormLabel>
          </div>
          <div>
            <PlaceInput type="text" id="geo-input" value={this.state.value} onChange={this.handleGeoInputChange} required aria-required="true"/>
          </div>
        </InputGroup>
        <InputGroup>
          <FormattedMessage {...messages.submitValue}>
            {(msg) => (<SearchSubmit type="submit" value={msg} required aria-required="true" />)}
          </FormattedMessage>
        </InputGroup>
      </form>
    );
  }
}

export default ResearchSearchForm;
import React, { useEffect, memo } from 'react';
import { FormattedMessage } from 'react-intl';
import history from 'utils/history';
import PlaceList from 'components/PlaceList';
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
  position: relative;
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
    this.state = {geoInputValue: '', resourceInputValue: 'affordable-housing', showSuggestions: false};

    this.handleGeoInputChange = this.handleGeoInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleGeoInputChange(event) {
    this.updateGeoInputValue(event.target.value);

    if(!!event.target.value && !!event.target.value.trim()) {
      this.setState({showSuggestions: true});
    } else {
      this.setState({showSuggestions: false});
    }
  }

  handleGeoInputBlur = (event) => {
  }

  handleResourceInputChange(event) {
    this.setState({resourceInputValue: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault(); 

    history.push({
      pathname: '/search',
      search: "?geo=" + this.state.geoInputValue + "&resource=" + this.state.resourceInputValue
    });
  }

  updateGeoInputValue = (text) => {
    this.setState({geoInputValue: text});
    this.setState({showSuggestions: false});
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
                <input id="affordable-housing" type="radio" name="resource-type" value="affordable-housing" onChange={ this.handleResourceInputChange.bind(this) } checked={this.state.resourceInputValue === 'affordable-housing'}/>
                <RadioLabel htmlFor="affordable-housing">
                  <FormattedMessage {...messages.resourceLabelHousing} />
                </RadioLabel>
              </div>
              <div className="radio-group">
                <input id="shelter" type="radio" name="resource-type" value="shelter" onChange={ this.handleResourceInputChange.bind(this) } checked={this.state.resourceInputValue === 'shelter'} />
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
            <FormLabel htmlFor="geo-input">
              2. <FormattedMessage {...messages.geoInputLabel} />
            </FormLabel>
          </div>
          <div>
            <PlaceInput type="text" id="geo-input" value={this.state.geoInputValue} onChange={this.handleGeoInputChange} onBlur={this.handleGeoInputBlur} required aria-required="true" autoComplete="off"/>
            <div>
              <PlaceList geoInputValue={ this.state.geoInputValue } isShow={ this.state.showSuggestions } updateGeoInputValue={ this.updateGeoInputValue } />
            </div>
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
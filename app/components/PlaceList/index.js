import React from 'react';
import Suggestion from './Suggestion';
import SuggestionsContainer from './SuggestionsContainer';

class PlaceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { suggestions: [] };
  }

  componentDidUpdate(prevProps) {
    const geoInputValue = this.props.geoInputValue;
    const url = "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/suggest?text=";

    fetch(url + geoInputValue + "&f=pjson&category=Neighborhood,City,Street Address&countryCode=USA")
    .then(res => res.json())
    .then((data) => {
      this.setState({suggestions: data["suggestions"]});
    })
    .catch(console.log);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.geoInputValue !== nextProps.geoInputValue;
  }

  render() {
    if(this.props.isShow == true) {
      return (
        <SuggestionsContainer>
          <Suggestion suggestions={this.state.suggestions} updateGeoInputValue={ this.props.updateGeoInputValue } />
        </SuggestionsContainer>
      );
    } else {
      return(<div></div>);
    }
  }
}

export default PlaceList;
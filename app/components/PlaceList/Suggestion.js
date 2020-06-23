import React from 'react';
import styled from 'styled-components';

const SuggestionItem = styled.div`
  margin-top: 0.25rem;
`;

class Suggestion extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return(
      <div>
        {this.props.suggestions.map(suggestion => (
          <SuggestionItem key={suggestion.text} onClick={() => this.props.updateGeoInputValue(suggestion.text)}>{suggestion.text}</SuggestionItem>
        ))}
      </div>
    );
  }
}

export default Suggestion;
import React from 'react';
import Result from './Result';

class ResourceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: this.props.results || [] };
  }

  componentDidMount() {
    this.setState({results: this.props.results});
  }

  componentDidUpdate() {
    this.setState({results: this.props.results});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.results !== this.state.results;
  }

  render() {
    return(
      <div>
        {this.state.results.map(result => (
          <Result key={result.attributes.PROPERTY_ID} resource={result} />
        ))}
      </div>
    )
  }
}

export default ResourceList;
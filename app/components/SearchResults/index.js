import React from 'react';
import { withRouter } from "react-router-dom";
import { parse } from "query-string";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { geo: ""};
  }

  componentDidMount() {
    const query = parse(this.props.location.search);

    this.setState({ geo: query.geo });
  }

  render() {
    return (
      <div>Query: { this.state.geo } </div>
    );
  }
}

export default withRouter(SearchResults);
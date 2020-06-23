import React from 'react';
import { withRouter } from "react-router-dom";
import { parse } from "query-string";
import styled from 'styled-components';
import H1 from 'components/H1';
import H2 from 'components/H2';
import ResourceList from 'components/ResourceList';

const SplitContainer = styled.div`
  display: flex;
`;

const Col = styled.div`
  flex: 1;
  flex-basis: 100%;
  flex-direction: column;

  &:first-child {
    padding-left: 4rem;
  }
`;

const SearchTitle = styled(H1)`
  margin-bottom: 0;
`;

const QueryString = styled(H2)`
  font-weight: normal;
  margin-top: 0;
`;

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = { geo: "", results: []};
  }

  componentDidMount() {
    const query = parse(this.props.location.search);
    this.setState({ geo: query.geo });

    this.fetchResults();
  }

  fetchResults() {
    const url = "http://localhost:3100/resources";
    
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        console.log("State Updated");
        this.setState({results: data});
      })
      .catch(console.log);
  }

  render() {
    console.log("Render");
    console.log(this.state.results);
    return (
      <SplitContainer>
        <Col>
          <div>
            <SearchTitle>Search Results for:</SearchTitle>
            <QueryString>{ this.state.geo }</QueryString>
          </div>
          <ResourceList results={this.state.results} />
        </Col>
        <Col>
          lalal
        </Col>
      </SplitContainer>
    );
  }
}

export default withRouter(SearchResults);
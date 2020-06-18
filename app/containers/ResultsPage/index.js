/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { withRouter } from "react-router-dom";
import SearchResults from 'components/SearchResults';


export default function ResultsPage(props) {

  return (
    <article>
      <SearchResults />
    </article>
  );
}

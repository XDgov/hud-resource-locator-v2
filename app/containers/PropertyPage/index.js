/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import { withRouter } from "react-router-dom";
import Property from 'components/Property';


export default function PropertyPage(props) {

  return (
    <Property />
  );
}

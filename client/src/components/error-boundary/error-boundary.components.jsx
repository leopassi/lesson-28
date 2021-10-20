import React from 'react';

import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './error-boundary.styles';


class ErrorBoundary extends React.Component {
  constructor () {
    super();

    this.state = {
      hasAnError: false
    };
  }

  static getDerivedStateFromError (error) {
    // process error
    return {hasAnError: true};
  }

  componentDidCatch (error, info) {
    console.log(error);
  }

  render () {
    if (this.state.hasAnError) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl='https://i.imgur.com/yW2W9SC.png' />
          <ErrorImageText>Sorry this page is broken </ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
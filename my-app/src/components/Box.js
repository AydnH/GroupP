import React from 'react';

export class Box extends React.Component {
  render() {
    return (
      <div className='box'>
        {this.props.children}
      </div>
    );
  }
}
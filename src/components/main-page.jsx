import React from 'react';
import ReactDom from 'react-dom';
import Title from './title-components/title.jsx';

export class MainPage extends React.Component {
  render() {
    return(
      <div>
        <Title />
      </div>
    );
  }
}

ReactDom.render(
  <MainPage />,
  document.getElementById('root')
);

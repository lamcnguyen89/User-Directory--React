import React, { Component } from 'react';
import Body from "./components/Body";
import Wrapper from  "./components/Wrapper";
import Heading from "./components/Heading"


class App extends Component {
  state = {  }
  render() { 
    return (  

      <div>
        <Wrapper>
          <Heading />
          <Body />
        </Wrapper>
      </div>
    );
  }
}
 
export default App;

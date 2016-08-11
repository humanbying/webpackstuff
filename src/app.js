import React from 'react'
import _ from 'lodash'

let names = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

console.log(_.chunk(_.shuffle(names),2))

const App = React.createClass({
  render() {
    return (
      <h1>I'm an App!</h1>
    )
  }
})


export default App;

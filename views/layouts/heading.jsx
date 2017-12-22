const React = require('react')

class Heading extends React.Component {
  render () {
    return (
      <heading>
        <h1>{this.props.headingOne}</h1>
      </heading>
    )
  }
}

module.exports = Heading

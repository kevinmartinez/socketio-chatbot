var React = require('react')
var Heading = require('./layouts/heading')
var DefaultLayout = require('./layouts/default')

class HelloMessage extends React.Component {
  render () {
    return (
      <DefaultLayout title={this.props.title}>
        <div>Hello {this.props.name}</div>
        <Heading>
          <div>Hello {this.props.name}</div>
        </Heading>
      </DefaultLayout>

    )
  }
}

module.exports = HelloMessage

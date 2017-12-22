var React = require('react')

class DefaultLayout extends React.Component {
  render () {
    return (
      <html>
        <head><title>{this.props.title}</title></head>
        <body>
          {this.props.children}
          <script src='/socket.io/socket.io.js' />
          <script src='client.js' />
        </body>
      </html>
    )
  }
}

module.exports = DefaultLayout

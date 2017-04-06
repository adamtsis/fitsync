import React, {Component} from 'react'

class FitStore extends Component {
  render() {
    return (
      <div className="container-vertical">
        <div>
          <img className="integration-image" src="/default-placeholder.png"
            alt={this.props.children + " image"}/>
        </div>
        <div className="container-vertical">
          {this.props.children}
          <div>
            <button type="button" name="sign-in" value={this.props.children}>
              Sign up with {this.props.children}
            </button>
          </div>
        </div>

      </div>
    )
  }
}

FitStore.PropTypes = {
  IntegrationName: React.PropTypes.string.isRequired
}

export default FitStore

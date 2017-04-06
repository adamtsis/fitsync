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
          {this.props.IntegrationObject.type}
          <div>
            <button type="button" name="sign-in" value={this.props.IntegrationObject.type}>
              Sign up with {this.props.IntegrationObject.type}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

FitStore.PropTypes = {
  IntegrationObject: React.PropTypes.string
}

export default FitStore

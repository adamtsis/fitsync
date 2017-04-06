import React, {Component} from 'react'
import FitStore from './FitStore'

class FitStoreGrid extends Component {
  render() {
    return (
      <div className="container-horizontal">
        {IntegrationElements(this.props.integrations)}
      </div>
    )
  }
}

FitStoreGrid.PropTypes = {
  integrations: React.PropTypes.array.isRequired
}

function IntegrationElements(foo) {

  return foo.map(function(integration, i) {
    return <FitStore key={integration.type} IntegrationObject={integration}/>
  })
}

export default FitStoreGrid

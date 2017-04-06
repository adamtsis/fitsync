import React, {Component} from 'react'
import FitStore from './FitStore'

class FitStoreGrid extends Component {
  render() {
    return (
      <div className="container-horizontal">
        {IntegrationElements(['Nike','Strava'])}
      </div>
    )
  }
}

FitStoreGrid.PropTypes = {
  integrations: React.PropTypes.array.isRequired
}

function IntegrationElements(foo) {

  return foo.map(function(integration, i) {
    // console.log(integration);
    return <FitStore key={integration}>{integration}</FitStore>
  })
}

export default FitStoreGrid

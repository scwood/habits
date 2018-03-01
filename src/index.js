import 'tachyons/css/tachyons.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import faPlus from '@fortawesome/fontawesome-free-solid/faPlus'
import fontawesome from '@fortawesome/fontawesome'

import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

fontawesome.library.add(faPlus)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

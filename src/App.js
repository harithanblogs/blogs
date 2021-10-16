import Homepage from './Homepage';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <>
            
      <Router>
        {/* <Route path='/:type' children={<FloatingChar />}></Route> */}
        <Route path='/' exact>
          <Homepage/>
        </Route>
        <Route path='/blog' exact>
          <Homepage/>
        </Route>
      </Router>

    </>
  )
}
export default App;
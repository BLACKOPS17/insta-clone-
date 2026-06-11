import React from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Suggestions from './Suggestions'



function App() {
    return (
        <div className='d-flex vh-100' >
            <div style={{ width : "20%" }}><Sidebar/></div>
            <div className='w-50'><Feed/></div>
            <div style={{width:'30%'}}><Suggestions/></div>

        </div>
    )
}

export default App
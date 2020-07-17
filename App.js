import * as React from 'react'
import Navigator from './components/Navigator'
import Welcome from './components/Welcome'

export default function App() {
    const [start, setStart] = React.useState(false)
    if (start) 
        return (<Navigator />)
    return (<Welcome onClick={() => setStart(true)} />)
}
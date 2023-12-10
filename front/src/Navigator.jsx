import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'

export default function Navigator(){
    return(
        <BrowserRouter>
            <div style={{display: 'flex'}}>
                <Sidebar/>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
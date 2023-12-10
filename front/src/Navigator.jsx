import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/'
import MinisterVotation from './pages/MinisterVotation/'
import PresbyterVotation from './pages/PresbyterVotation/'
import DeaconVotation from './pages/DeaconVotation/'
import Sidebar from './components/Sidebar/'

const PrivateRoute = ({ element: Element, ...rest }) => (
    <Sidebar>
        <Element />
      {/* <Footer /> */}
    </Sidebar>
  )

export default function Navigator(){
    return(
        <BrowserRouter>
            <div style={{display: 'flex'}}>
                <Routes>
                    <Route path='/' element={<PrivateRoute element={Home} />} />
                    <Route path='/ministerVotation' element={<PrivateRoute element={MinisterVotation}/>}></Route>
                    <Route path='/presbyterVotation' element={<PrivateRoute element={PresbyterVotation}/>}></Route>
                    <Route path='/deaconVotation' element={<PrivateRoute element={DeaconVotation}/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
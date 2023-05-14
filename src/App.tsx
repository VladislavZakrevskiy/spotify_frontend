import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Tracks from './pages/Tracks'
import Navbar from './components/Navbar'
import Player from './components/Player'
import TrackById from './pages/TrackById'
import Create from './pages/Create'
import Albums from './pages/Albums'
import { Provider } from 'react-redux'
import { store } from './store/store'

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter >
          <Navbar/>
          <Routes>
              <Route element={<Home/>} path='/'/>
              <Route element={<Tracks/>} path='/tracks'/>
              <Route element={<TrackById/>} path='/tracks/:id'/>
              <Route element={<Create/>} path='/tracks/create'/>
              <Route element={<Albums/>} path='/albums'/>
          </Routes> 
          <Player/>
      </BrowserRouter>
    </Provider>
    
  )
}

export default App
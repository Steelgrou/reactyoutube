import './App.css'
import { Routes, Route } from 'react-router-dom'
import Homepage from './Page/Homepage/Homepage'
import Trending from "./Page/Trending/Trending"
import Subscriptions from './Page/Subscriptions/Subscriptions'
import Library from './Page/Library/Library'
import History from './Page/History/History'
import Watchlater from './Page/Watchlater/Watchlater'
import Favourites from './Page/Favourites/Favourites'
import Likedvideos from './Page/Likedvideos/Likedvideos'



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Trending" element={<Trending />} />
        <Route path="/Subscriptions" element={<Subscriptions />} />
        <Route path="/Library" element={<Library />} />
        <Route path="/History" element={<History />} />
        <Route path="/Watchlater" element={<Watchlater/>} />
        <Route path="/Favourites" element={<Favourites />} />
        <Route path="/Likedvideos" element={<Likedvideos />} />
        {/* <Route path="/" element={<Music />} /> */}
        {/* <Route path="/" element={<Games />} /> */}
        {/* <Route path="/" element={<Showmore />} /> */}
      </Routes>

    </>
  )
}

export default App

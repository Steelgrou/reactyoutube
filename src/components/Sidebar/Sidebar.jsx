import { Link } from "react-router-dom"
import "./Sidebar.css"


function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <Link to="/">Home</Link>
                <Link to="/Trending">Trending</Link>
                <Link to="/Subscriptions">Subscriptions</Link>
                <Link to="/Library">Library</Link>
                <Link to="/History">History</Link>
                <Link to="/Watchlater">Watch later</Link>
                <Link to="/Favourites">Favourites</Link>
                <Link to="/Likedvideos">Liked videos</Link>
                <Link to="">Music</Link>
                <Link to="">Games</Link>
                <Link to="">Show more</Link>
            </div>
        </>
    )

}

export default Sidebar
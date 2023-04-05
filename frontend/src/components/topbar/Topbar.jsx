import './Topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'

function Topbar() {
  return (
    <div className='topbar-container'>
      <div className="topbar-left">
        <span className='logo'>Leapod</span>
      </div>
      <div className="topbar-center">
        <div className="topbar-search">
            <Search className='search-icon' />
            <input type="text" placeholder='Seach here...' className="search-input" />
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-links">
            <span className="topbar-link">Homepage</span>
            <span className="topbar-link">Timeline</span>
        </div>
        <div className="topbar-icons">
            <div className="topbar-icon-item">
                <Person />
                <span className="topbar-icon-badge">1</span>
            </div>
            <div className="topbar-icon-item">
                <Chat />
                <span className="topbar-icon-badge">2</span>
            </div>
            <div className="topbar-icon-item">
                <Notifications />
                <span className="topbar-icon-badge">1</span>
            </div>
        </div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Festival_des_Vieilles_Charrues_2018_-_Liam_Gallagher_-_013.jpg" alt="" className="topbar-img" />
      </div>
    </div>
  )
}

export default Topbar

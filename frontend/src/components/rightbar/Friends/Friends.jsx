import './Friends.css'

function Friends({user}) {
  return (
    <div>
          <li className="rightbar-friend">
            <div className="rightbar-profile-img-container">
              <img className='rightbar-profile-img' src={user.profileImg} alt="" />
              <span className="rightbar-online"></span>
            </div>
            <span className="rightbar-profile-name">
              {user.profileName}
            </span>
          </li>
    </div>
  )
}

export default Friends

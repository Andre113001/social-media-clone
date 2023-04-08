import './CloseFriend.css'

function CloseFriend({user}) {
  return (
    <div>
      <li className="sidebar-friend">
            <img className='sidebar-friend-img' src={user.profileImg} />
            <span className="sidebar-friend-name">{user.profileName}</span>
          </li>
    </div>
  )
}

export default CloseFriend

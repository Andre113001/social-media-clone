import './Share.css'
import { EmojiEmotions, Label, PermMedia, Room } from '@mui/icons-material'

function Share() {
  return (
    <div className='share'>
      <div className="share-wrapper">
        <div className="share-top">
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Festival_des_Vieilles_Charrues_2018_-_Liam_Gallagher_-_013.jpg" alt="" className='share-profile-img'/>
            <input type="text" className='share-input' placeholder="What's on your mind?..."/>
        </div>
        <hr className="share-hr" />
        <div className="share-bottom">
            <div className="share-options">
                <div className="share-option">
                    <PermMedia htmlColor='green' className='share-option-icon'/>
                    <span className='share-option-text'>Photo or Video</span>
                </div>
                <div className="share-option">
                    <Label htmlColor='blue' className='share-option-icon'/>
                    <span className='share-option-text'>Tag</span>
                </div>
                <div className="share-option">
                    <Room htmlColor='red' className='share-option-icon'/>
                    <span className='share-option-text'>Location</span>
                </div>
                <div className="share-option">
                    <EmojiEmotions htmlColor='orange' className='share-option-icon'/>
                    <span className='share-option-text'>Feelings</span>
                </div>
            </div>
            <button className="share-button">Share</button>
        </div>
      </div>
    </div>
  )
}

export default Share

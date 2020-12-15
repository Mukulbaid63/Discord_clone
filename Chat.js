import React from 'react'
import './Chat.css'
import ChatHeader from './ChatHeader'
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';
import Message from './Message';
function Chat() {
    return (
        <div className="chat">
            <ChatHeader/>
            <div className="chat_messages">
                <Message/>
                <Message/>
                <Message/>
                <Message/>
            </div>
            <div className="chat_input">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input placeholder={'Message YOUTUBE'}/>
                    <button className="chat_inputbutton"type='submit'>Send Message</button>
                </form>
                <div className="chat_inputIcons">
                    <CardGiftcardIcon/>
                    <GifIcon/>
                    <EmojiEmotionsIcon/>
                </div>
            </div>
        </div>
    )
}

export default Chat

import { Avatar } from '@material-ui/core'
import React from 'react'
import './Message.css'

function Message() {
    return (
        <div className="message">
            <Avatar/>
            <div className="message_info">
                <h4>Muddhit
                    <span className="message_timestamp">
                        Thu,09 Oct,2020 20:11:20 IST
                    </span>
                </h4>
                <p> Hey is the project ready?</p>
            </div>
        </div>
    )
}

export default Message

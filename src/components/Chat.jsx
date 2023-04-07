import React from 'react'
import Messages from './Messages'
import SendMessage from './SendMessage'

const Chat = () => {
  return (
    <div className='mt-5 flex flex-col'>
        <Messages/>
        <SendMessage/>
    </div>
  )
}

export default Chat
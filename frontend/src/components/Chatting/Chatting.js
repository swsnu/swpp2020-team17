import React from 'react';
import { Chat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';

import 'stream-chat-react/dist/css/index.css';

const Chatting = (props) => {
  return (
    <div className="Chatting">
      <Chat client={props.chatClient} theme={'messaging light'}>
        <Channel channel={props.channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  )
};
  


export default Chatting;
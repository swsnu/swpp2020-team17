import React from 'react';
import { Chat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';



const Chatting = (props) => {
  // const chatClient = new StreamChat('dc8cfsjehcsx');

  // chatClient.setUser(
  //   {
  //       id: 'aa',
  //       name: 'aa',
  //       image: 'https://getstream.io/random_png/?id=cold-cloud-8&name=Cold+cloud'
  //   },
  //   chatClient.devToken('aa'),
  // );
  
  // const channel = chatClient.channel('messaging', 'newroom', {
  //   // add as many custom fields as you'd like
  //   image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
  //   name: 'Talk about Go',
  // });
  return (
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
  )
};
  


export default Chatting;
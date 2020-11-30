import React from 'react';
import { Chat, Channel, ChannelHeader, Thread, Window } from 'stream-chat-react';
import { MessageList, MessageInput } from 'stream-chat-react';
import { StreamChat } from 'stream-chat';

import 'stream-chat-react/dist/css/index.css';

const chatClient = new StreamChat('uj4pbgxc8kna');
const userToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiY29sZC1jbG91ZC04In0.MQ5M9y4P_dRLszZ94UNyNOmEM73DBawRQuRrSqriMV4';

chatClient.setUser(
  {
       id: 'cold-cloud-8',
       name: 'Cold cloud',
       image: 'https://getstream.io/random_png/?id=cold-cloud-8&name=Cold+cloud'
  },
  userToken,
);

const channel = chatClient.channel('messaging', 'godevs', {
  // add as many custom fields as you'd like
  image: 'https://cdn.chrisshort.net/testing-certificate-chains-in-go/GOPHER_MIC_DROP.png',
  name: 'Talk about Go',
});

const Chatting = (props) => {
  return (
    <Chat client={chatClient} theme={'messaging light'}>
      <Channel channel={channel}>
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
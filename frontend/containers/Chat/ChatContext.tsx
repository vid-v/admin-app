import React, { useState } from 'react';

interface ContextProps {
  user: {
    id: string;
    name: string;
    image: string;
    message: string;
    isActive: boolean;
  };
  handleSelectedUser: Function;
}

export const ChatContext = React.createContext({} as ContextProps);

const ChatProvider = props => {
  const [user, setUser] = useState<any>({
    id: '1',
    name: 'Brian Smith',
    image:
      'https://pbs.twimg.com/profile_images/1157046181698011136/xZ4wg2Xj.jpg',
    message: 'Nice to meet you!',
    isActive: true,
  });

  const handleSelectedUser = data => {
    setUser(data);
  };

  return (
    <ChatContext.Provider value={{ user, handleSelectedUser }}>
      {props.children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;

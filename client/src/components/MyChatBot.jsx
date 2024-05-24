import ChatBot from 'react-simple-chatbot';

const MyChatBot = () => {
  const overrideInputStyle = {
    inputStyle: {
      color: 'black', // Set text color to white for better visibility in dark mode
    },
  };

  return (
  <ChatBot
    steps={[
      {
        id: '1',
        message: 'What is your name?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hi {previousValue}, Welcome to Echo Ideas',
        trigger: '4',
      },
      {
        id: '4',
        message: 'How can I help You?',
        trigger: '5'
      },
      {
        id: '5',
        options: [
          { value: 1, label: 'What is the website about?', trigger: '6' },
          { value: 2, label: 'How can I create a new Post?', trigger: '7' },
          { value: 3, label: 'How can I Access Admin DashBoard?', trigger: '8' },
        ],
      },
      {
        id: '6',
        message: 'Echo Ideas is a Article/Blog Website, As a normal user you can create Posts, comment and like a post. You can sign In with email and password or sign in directly with Google.',
        trigger: '5',
      },
      {
        id: '7',
        message: 'To create a new Post, open your profile and below the update will be the create post button.',
        trigger: '5',
      },
      {
        id: '8',
        message: 'Unfortunately you cannot access admin panel unless you are an admin or have admin permission. So you have to first request the admin to grant you access',
        trigger: '5',
      }
    ]}
    floating={true}
    {...overrideInputStyle}
  />
);
}

export default MyChatBot;

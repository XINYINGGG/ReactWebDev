const users = {
        'Emily': 'Emily',
        'Xiny': 'Xiny',
        'Tian': 'Tian',
};

const messages = [
    {
      sender: 'Emily',
      timestamp: new Date("2019-04-04 08:29:00"),
      text: "Hi",
    },
    {
      sender: 'Xiny',
      timestamp: new Date("2019-04-05 08:29:00"),
      text: "Hello",
    },
];

function addMessage({ sender, timestamp, text }) {
  messages.push({ sender, timestamp, text });
}

function addUser({ username }) {
  users[username] = username;
}

function removeUser({ username }) {
  delete users[username];
}

const chat = {
  users,
  messages,
  addMessage,
  addUser,
  removeUser
};

module.exports = chat;
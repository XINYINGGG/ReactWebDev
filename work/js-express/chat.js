const currenUser = "";


const users = [
    
];

const messages = [

];

function addMessage({ sender, timestamp, text }) {
  messages.push({ sender, timestamp, text });
}

function addUsers(user){
  users.push(user);
}

function deleteUser(user){
  let index = users.indexOf(user);
  users.splice(index,1);
}
const chat = {
  currenUser,
  users,
  messages,
  addMessage,
  addUsers,
  deleteUser,
};

module.exports = chat;


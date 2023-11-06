import readline from 'readline';

const rl =
  readline.createInterface({
    input: process.stdin, output: process.stdout
  });


const predefinedResponses = {
  'hello': 'Hello! How can I assist you today?',
  'how are you': 'I am just a computer program, but I am functioning well. How about you?', 'goodbye': 'Goodbye! If you have more questions in the future, feel free to come back.', 'exit': 'Chatbot has been terminated. Goodbye!'
};

console.log('Chatbot: Hello! You can start chatting. Type "exit" to quit.');

rl.on('line', (input) => {
  const lowerInput = input.toLowerCase(); if
    (predefinedResponses[lowerInput]) {
    console.log('Chatbot:', predefinedResponses[lowerInput]); if
      (lowerInput === 'exit') {
      rl.close(); // Terminate the chatbot gracefully
    }
  } else {
    console.log('Chatbot: Sorry, I don\'t understand that. Please ask another question or type "exit" to quit.');
  }
});

rl.on('close', () => {
  console.log('Chatbot: Chat has ended.');
  process.exit(0);
});

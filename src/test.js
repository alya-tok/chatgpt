const gpt = require("./index")

const query = 'YOUR QUESTIONS'

gpt(query)
  .then((result) => {
    console.log(result);
  })

## Instalation :
```bash
> npm i alia-chatgpt
```

## Example code
```js
const gpt = require("alia-chatgpt")
let content = await gpt("what is javascript ?")
console.log(content)
```
## Response for success
```
{
  "developer": "@Alia uhuy",
  "status": true,
  "data": {
    "content": "JavaScript is a programming language used to create and control dynamic website content. It is a client-side scripting language, meaning it runs on the user's web browser rather than on the web server. JavaScript is used to create interactive web pages, animate graphics, and create complex web applications. It can also be used for server-side programming with Node.js. JavaScript is an essential tool for web development and is supported by all modern web browsers."
}
}
```
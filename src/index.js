// client_id is not an apikey or token, but access to search from the https://you.com website for free

const axios = require("axios")

module.exports = gpt = (text) =>{
      return new Promise(async (resolve) => {
         try {
            let json = await (await axios.get('https://api.alyachan.my.id/api/chatgpt?prompt=' + text + '&client_id=131Cf7BuBk2qodxHEqPladu9tNSmYvjobEQgRvn9FvyAlG6w9lSP')).data
            if (!json.status) return resolve({
               developer: '@Alia uhuy',
               status: false,
               msg: `Can't get questions`
            })
            resolve({
               developer: '@Alia uhuy',
               status: true,
               data: json.data
            })
         } catch (e) {
            console.log(e)
            return resolve({
               developer: '@Alia uhuy',
               status: false,
               msg: 'Internal server has erorr ocurred'
            })
         }
      })
   }
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      log: true
      on ('task',{
        log(message){
          console.log(message)
          return null
        }
      })
    },
  },
  env:{
    apiUrl:'https://the-internet.herokuapp.com'
  }
});

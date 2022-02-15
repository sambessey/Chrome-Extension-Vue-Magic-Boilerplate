module.exports = {
    //...
    pluginOptions: {
      browserExtension: {
        componentOptions: {
          contentScripts: {
            entries: {
              'content-script': [
                'src/content-scripts/content-script.js'
              ]
            }
          }
        }
      }
    }
  }
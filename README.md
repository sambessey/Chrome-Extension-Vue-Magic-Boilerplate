# Boilerplate Chrome Extension - Magic.link & Vue

** Now with Manifest v3! **

This is a boilerplate Chrome extension template, built on Vue. It leverages Magic.link for login and authentication. The user session is shared between the popup and the Content Script (No background script/ Service worker needed!) using the Chrome API. As an example, you can write something like this to return a resolved Promise containing the user status:

```
 await new Promise((resolve, reject) => {
    const key = 'theUser';
    chrome.storage.local.get([key], (result) => {
    if(result.theUser){
        console.log('Retrieved name: ' + result.theUser);
        return resolve(result.theUser);
    }
  else return reject ("No logged in user found.")
});
        });
```

### Ingredients

- Magic.link (for login)
- Vue v2
- Vuex
- Vue-cli-plugin-browser-extension (Dev Dependency)

### Development

- Currently there is poor support for hot reload using vue-cli-pluigin, and unsafe-eval is not possible in Manifest v3. In order to develop, simply set the manifest version to 2 and restart/ refresh the plugin. This will provide the expected capabilities.
- Magic Link popup can ONLY be tested when building for prod (as below), so log in, then restart with Manifest v2 when troubleshooting.
- Doppio Proxy runs in http (insecure) in local dev, so allow the Google Slides window to access insecure endpoints.

### Building for Prod

- Switch to Manifest v3 (Update Manifest file) prior to a prod build or E2E test!

## Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn serve
```

### Compiles and minifies for production

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

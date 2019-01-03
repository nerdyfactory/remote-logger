# remote-logger
Very simple remote logger for react-native

### Installation
```
 $ yarn add rn-remote-logger
```

### Client Usage
```
  import RemoteLogger from 'rn-remote-logger'
  if (__DEV__) {
    RemoteLogger.init('your sever's url')

    // overwrite `console.log` function
    console.log = (message) => {
      RemoteLogger.log(message)
    }
  }
```

### Logging Server
after clone this repository, install the dependencies
```
 $ git clone git@github.com:nerdyfactory/rn-remote-logger.git
 $ cd rn-remote-logger
 $ yarn install
```

start the server
```
 $ yarn start
```

Please note that your logging server must be accessible from your app
If they are not in same network, consider using tools like [ngrok](https://ngrok.com/)

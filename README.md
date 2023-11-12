# listmaker (server)
The backend for a Node/Express CRUD app for making lists, such as todo, groceries, etc.

## Setup

Dev server
```
npm run dev
```

By default, the app runs on port `3030`.

Build
```
npm run build
```

Once built, it can be started (for example in production):
```
npm start
```

## To have the app run at boot and restart on failure, create a systemd service

- First stop the app if it is currently running.
- Copy `listmaker-node.service` to the directory `/etc/systemd/user`.
- Run the commands
```
systemctl --user enable listmaker-node
```

```
systemctl --user start listmaker-node
```

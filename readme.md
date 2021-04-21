The packaging config on server only supports the following commands, and the only customizable part is `env`.

```bash
npm run build --env=prod
```

This repo provides implementations for different`npm run script` via shell script or node script.

```bash
# shell script
npm run build --env=prod 

# node script
npm run build:js --env=prod
```
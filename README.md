![Moleculer logo](http://moleculer.services/images/banner.png)

[![Moleculer](https://badgen.net/badge/Powered%20by/Moleculer/0e83cd)](https://moleculer.services)

# Demo project for Docker
This is an example project to try Moleculer with Docker and Kubernetes.

# Usage with Docker

## Run a container with all services

```bash
docker run -e SERVICES=services -p 3000:3000 moleculer/demo
```

## Run every services in an individual container
In this case you should also start a transporter, e.g. NATS.
```bash
docker run -d -e SERVICEDIR=services -e SERVICES=greeter moleculer/demo
docker run -d -e SERVICEDIR=services -e SERVICES=products moleculer/demo
docker run -d -e SERVICEDIR=services -e SERVICES=api -p 3000:3000 moleculer/demo
```

# Usage with Docker Compose
This command starts all services in individual containers, a NATS server as transporter, a MongoDB server & Traefik as reverse proxy.
```bash
docker-compose up -d
```

# Usage with Kubernetes
This command starts all services in individual pods, a NATS server as transporter and a MongoDB server.
```bash
kubectl apply -f https://raw.githubusercontent.com/moleculerjs/docker-demo/master/k8s.yaml
```

# Usage with [K3s](https://k3s.io/)
This command starts all services in individual pods, a NATS server as transporter and a MongoDB server.
```bash
kubectl apply -f https://raw.githubusercontent.com/moleculerjs/docker-demo/master/k3s.yaml
```

# Services
- **api**: API Gateway services
- **greeter**: Sample service with `hello` and `welcome` actions.
- **products**: Sample DB service with MongoDB if `process.env.MONGO_URI` is defined, otherwise with NeDB.

# Test the running project

**Call the `greeter.hello` action**
```bash

```

**Call the `greeter.welcome` action with params**
```bash

```

**Create a product item**
```bash

```

**List all products**
```bash

```



# License
Moleculer is available under the [MIT license](https://tldrlegal.com/license/mit-license).

# Contact
Copyright (c) 2016-2019 MoleculerJS

[![@moleculerjs](https://img.shields.io/badge/github-moleculerjs-green.svg)](https://github.com/moleculerjs) [![@MoleculerJS](https://img.shields.io/badge/twitter-MoleculerJS-blue.svg)](https://twitter.com/MoleculerJS)

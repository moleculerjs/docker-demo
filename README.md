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

**Result**
```
NAME                                           READY   STATUS    RESTARTS   AGE
pod/nats-6c745f949b-8g994                      1/1     Running   0          23h
pod/moleculer-demo-api-6958b5475b-5qfxx        1/1     Running   0          4h37m
pod/moleculer-demo-greeter-6c875544b6-jbcjf    1/1     Running   0          4h37m
pod/moleculer-demo-greeter-6c875544b6-fx829    1/1     Running   0          4h37m
pod/moleculer-demo-api-6958b5475b-mwbc8        1/1     Running   0          4h36m
pod/mongo-555c4f494f-xjvx8                     1/1     Running   0          3h15m
pod/moleculer-demo-products-784446b876-fdlrz   1/1     Running   0          3h8m
pod/moleculer-demo-products-784446b876-5qfrc   1/1     Running   0          3h8m

NAME            TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)     AGE
service/nats    ClusterIP   10.43.193.134   <none>        4222/TCP    23h
service/api     ClusterIP   10.43.121.57    <none>        3000/TCP    22h
service/mongo   ClusterIP   10.43.80.140    <none>        27017/TCP   3h15m

NAME                                      READY   UP-TO-DATE   AVAILABLE   AGE
deployment.apps/nats                      1/1     1            1           23h
deployment.apps/moleculer-demo-greeter    2/2     2            2           23h
deployment.apps/moleculer-demo-api        2/2     2            2           23h
deployment.apps/mongo                     1/1     1            1           3h15m
deployment.apps/moleculer-demo-products   2/2     2            2           4h37m

NAME                                                 DESIRED   CURRENT   READY   AGE
replicaset.apps/nats-6c745f949b                      1         1         1       23h
replicaset.apps/moleculer-demo-greeter-6c875544b6    2         2         2       4h37m
replicaset.apps/moleculer-demo-api-6958b5475b        2         2         2       4h37m
replicaset.apps/mongo-555c4f494f                     1         1         1       3h15m
replicaset.apps/moleculer-demo-products-784446b876   2         2         2       3h8m
```

# Services
- **api**: API Gateway services
- **greeter**: Sample service with `hello` and `welcome` actions.
- **products**: Sample DB service with MongoDB if `process.env.MONGO_URI` is defined, otherwise with NeDB.

# Test the running project
In case of Docker or Docker Compose
```
export HOSTNAME=127.0.0.1:3000
```

In case of Kubernetes
```
export HOSTNAME=moleculer.127.0.0.1.nip.io
```

**Call the `greeter.hello` action**
```bash
curl http://$HOSTNAME/api/hello
```

**Call the `greeter.welcome` action with params**
```bash
curl http://$HOSTNAME/api/greeter/welcome?name=Moleculer
```

**Create a product item**
```bash
curl -X POST -d '{"name": "Samsung Galaxy S10", "category": "phones", "price": 299.99, "quantity": 10}' http://$HOSTNAME/api/products
```

**List all products**
```bash
curl http://$HOSTNAME/api/products
```


# License
Moleculer is available under the [MIT license](https://tldrlegal.com/license/mit-license).

# Contact
Copyright (c) 2016-2019 MoleculerJS

[![@moleculerjs](https://img.shields.io/badge/github-moleculerjs-green.svg)](https://github.com/moleculerjs) [![@MoleculerJS](https://img.shields.io/badge/twitter-MoleculerJS-blue.svg)](https://twitter.com/MoleculerJS)

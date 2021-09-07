# triolog
Programming Language and Compiler for Modeling Math Questions
- The project works on [Heroku server](https://triologco.herokuapp.com/)

## Getting Started

First, need to install [Node.js](https://nodejs.org/en/download/) and [React.js](https://react-cn.github.io/react/downloads.html) on locally and follow the guide below;

```bash
>> git clone https://github.com/crazycoder-io/triolog
>> cd triolog
>> npm install
>> npm start
   # or
>> yarn start
```
- Then go to [localhost:3000](http://localhost:3000)

### Or

Another way; run with docker container;

```bash
>> docker build -t triolog .
>> docker run -d -p 7777:7777 triolog
```

Can list all docker containers with;
```
    docker ps -a
```
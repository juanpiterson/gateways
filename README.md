# Gateways

a [Sails v1](https://sailsjs.com) application

This is a sample project for managing gateways - master devices that control multiple peripheral
devices.

### Requirements
+ Node.js ^14.15

### Installation
To install please follow the steps:

1. git clone https://github.com/juanpiterson/gateways.git
2. cd gateways
3. npm install
4. sails lift

### How to use
You can start the app by running one of these commands.

* sails lift
* node app.js
* npm start
* yarn start

After application start, you should be able to see something like:

<img src="https://github.com/juanpiterson/gateways/blob/master/doc/img/app-lifted.png" width="400">

There are some dummy data provided that is reloaded each time the app is started.
You can use some postman queries provided as a collection under **./postman** directory, that can be imported.
For delete and get items queries please provide valid ids. You can use the list queries to see the current data.

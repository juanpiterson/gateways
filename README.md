# Gateways

a [Sails v1](https://sailsjs.com) application

This is a sample project for managing gateways - master devices that control multiple peripheral
devices.

### Requirements
+ Node.js ^14.15
+ npm ^6.14.10

Please make sure you have `port: 1337` available.

### Installation
To install please follow these steps:

1. git clone https://github.com/juanpiterson/gateways.git
2. cd gateways
3. npm install
4. **npm start**

### How to use
1 - You can start the app by running one of these commands.

* **npm start**
* node app.js
* yarn start

2 - Press `Ctrl + c` at any moment to stop the execution.

3 - After application start, you should be able to see something like:

<img src="https://github.com/juanpiterson/gateways/blob/master/doc/img/app-lifted.png" width="400">

There are some dummy data provided that is reloaded each time the app is started.
You can use some postman queries provided as a collection under **./postman** directory.
For **delete** and **get** items queries please provide valid ids. You can use **lists** queries to see the current data.

For example:

* GET, http://localhost:1337/peripheraldevice/
* GET, http://localhost:1337/gateway

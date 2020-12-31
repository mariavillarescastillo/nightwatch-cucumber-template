# Nightwatch Cucumber Template

Introduction
------------
This is an automation testing project template with some simple examples developed using Nightwatch.js and Cucumber applying Page Object Model design pattern.

Requirements
------------
This project has been developed using **[Node.js](https://nodejs.org/es/) v10.19.0** and **[npm](https://www.npmjs.com/) v6.14.4**.

*Install Node.js:*
```
sudo apt install nodejs
```
*Install npm:*
```
sudo apt install npm
```

**[Google Chrome](https://www.google.com/intl/es_es/chrome/) v87.x.x** must be installed.

Quickstart
----------
Install project dependencies (Nightwatch.js and browser drivers):
```
npm i
```

Run tests
---------
Run all tests on default browser (Google Chrome):
```
npm run test
```

Notes
-----
Test execution results are shown in two different reports:

* Console (visualization improved with cucumber-pretty):

![console-report](https://user-images.githubusercontent.com/14809393/103385912-bc855200-4afc-11eb-8ff8-7c06e6341f52.png)

* HTML (generated by multiple-cucumber-html-reporter, reports are shown at the end of test execution by configuration):

![html-report](https://user-images.githubusercontent.com/14809393/103385669-a9be4d80-4afb-11eb-975e-f368f5985c5c.png)

This project is ready to add different testing browsers using cross-env. At this moment, only Google Chrome has been implemented:
```
npm run test:chrome
```

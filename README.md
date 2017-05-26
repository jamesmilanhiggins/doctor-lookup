# _Find Doctors_

#### _This app lets users find doctors based off a submitted medical issue, Friday, May 26, 2017_

#### By _**James Higgins**_

## Description

_This app calls a doctor api and returns a list of doctors that specialize in the users summitted medical issue._

## Setup/Installation Requirements

### Access Atom Files

* _Ensure connection to the Internet_
* _On a mac using spotlight search type in terminal_
* _Once in terminal enter the following commands to clone the file to your desktop and open the repository:_
```
$ cd desktop
$ git clone https://github.com/jamesmilanhiggins/doctor-lookup
$ cd doctor-lookup
$ npm install
$ bower install
$ touch .env [ add the following to this file: exports.apiKey = "Add-your-api-key-here";]
$ atom .
```

### Run the Program
* _Navigate to the repo on your desktop and run the following in a new tab in the terminal to start the localhost:3000 server:_

```
$ gulp build
$ gulp serve
```
* _Your browser should automatically open._

## Known Bugs

* _Note: If your API request is not successful and you get the following error in the console: Origin is not allowed by Access-Control-Allow-Origin., try installing the Allow-Control-Allow-Origin:_ [Chrome extension](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)*


## Support and contact details

_Please contact James Higgins at James.Milan.Higgins@gmail.com if you have any questions._

## Technologies Used

* JavaScript
* Node
* Bower
* Jquery
* Bootstrap

### API

* API from [Better Doctor](https://developer.betterdoctor.com/)

### License

*This software is licensed under MIT license.*

Copyright (c) 2017 **_James Higgins_**



![first Screenshot](/images/first.png)
![third Screenshot](/images/third.png)
![second Screenshot](/images/second.png)
![fourth Screenshot](/images/fourth.png)

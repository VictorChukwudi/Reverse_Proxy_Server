# Reverse_Proxy_Server
## Description
This project is a reverse proxy server as the name implies. Being a reverse server, it is implemented on the serve-side in contrast to the forward proxy server. The http-proxy-middleware module is used to implement this. 
## Set-up
To run this project locally, here are the steps which starts by cloning the repo to your machine
```
$git clone https://github.com/VictorChukwudi/Reverse_Proxy_Server.git
```
Open the cloned folder with any of code editor of you choice and run this command to install used modules:
```
$npm install

```

You can proxy any url of your choice by going into the server.js file and edit the target line in the options object as follows:
```
target:"any url of your choice(https://example.com)"
```
All is now set. Run the program with
```
$npm start
```
Finally, open your browser and access the url you entered as " localhost:portNumber "
```
localhost:5050
```


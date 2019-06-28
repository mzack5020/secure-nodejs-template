# Secure NodeJS User Auth Shell
NodeJS application designed with a shell framework for user authentication. Built on Express, it will only send the files needed for the current view to the client, speeding up rendering and content delivery as well as enhancing security by hiding unneeded assets.

The idea here was to design an [Express] application that only sent the client the files it needed. I noticed that when using frameworks like Angular, all of the website files were being sent to the front-end. I'd prefer to hide as much as possible by only sending what was required. For example, when a user logs into the application, they only see the secure pages that they need. When they are logged out, none of the secure pages are available on the client side. All processing should always remain on the backend through the API calls; however, I just prefer to only send the files that are needed. I haven't done any testing but I'd venture to say that sending only the required files would make rendering slightly faster on slower connections. 

## Tech Stack
  * [NodeJS] - JavaScript framework to support backend processing
  * [Express] - Fast node.js network app framework [@tjholowaychuk]
  * [jQuery] - Great front-end library to assist in many functions across the site (and for Bootstrap)
  * [Twitter Bootstrap] - great UI boilerplate for modern web apps
  
## Getting Started
```bash
npm install
```

```bash
nodemon
```

That's it :)
 
[//]: #
   [NodeJS]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [Express]: <http://expressjs.com>

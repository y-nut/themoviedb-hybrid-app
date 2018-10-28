# [Hybrid App - The movie DB](https://github.com/y-nut/themoviedb-hybrid-app)
_Last edited 28.10.2018_

A simple hybrid app that utilizes themoviedb.org's API.


Screenshots: 
![Screeshot 1](https://ibb.co/e3ux1V "Screenshot 1")
![Screeshot 2](https://ibb.co/eLsT8A "Screenshot 2")
![Screeshot 3](https://ibb.co/hbkFoA "Screenshot 3")
![Screeshot 4](https://ibb.co/n8Kx1V "Screenshot 4")



## Getting started
When you have finished the steps below, you should have set up a Google Cloud Functions Server and an Angular 5 VOD app. The instructions are given on Linux.

### Prerequisites
#### _Firebase_
The project relies on Firebase as backend. Therefore you have to create a Firebase project in your Firebase Console. Please refer to the Firebase documentation.
You can test locally with “firebase serve —only functions, hosting” command.

#### _Angular 5_
The framework for the client app is Angular 5. Please follow instructions on how to set up an Angular 5 development environment on Angular.io. Personally I use Visual Studio Code as the editor and Angular 5 extensions for convergent coding style.

### Installing
* Follow instructions on <https://github.com/bfwg/ngx-drag-scroll> to create the "base" root folder for this project. If this has been followed, the project folder will be called ngx-drag-scroll
* Inside of the root ngx-drag-scroll folder, initiate a Firebase project with hosting and functions. Functions should be based on Javascript. The public folder in the firebase.json file should be dist. The dist folder will then be auto generated when giving the command "ng build --prod"

* Download this project's root folder and replace the files and folders defined below.
* Replace the ngx-drag-scroll/demo folder 
* Replace/overwrite the ngx-drag-scroll/package.json file
* Replace/overwrite ngx-drag-scroll/functions/index.js and ngx-drag-scroll/functions/package.json
* In the root ngx-drag-scroll folder, run "npm install"
* In the ngx-drag-scroll/functions folder, run "npm install"
* Run the commands “ng build —prod” and then “firebase serve” or "firebase deploy". 

Your root project folder should look like this. 
![Root folder](https://image.ibb.co/g4mbHS/project.png "Root folder")

#### _Demo_
You can see a demo of the project here:
<https://test-4a274.firebaseapp.com>

## Running the tests
No tests yet specified.

## Deployment
This project has been deployed with the Firebase hosting service.
Type “firebase deploy” in the terminal to launch the site. Firebase deployment supports custom domains. Reference to the Firebase documentation. 

### Built With
* Angular 5 - Angular/CLI -v = 1.6.2
* Firebase - Firebase -V = 3.18.2

## Contributing
No CONTRIBUTING.md has been created yet.

## Versioning
There is no versioning tool used (e.g. SemVer).  Only git.

## Authors
* Thomas Thomsen - initial work

## License
No LICENSE.md has been created yet.

## Acknowledgments
* ngx-drag-scroll  - <https://github.com/bfwg/ngx-drag-scroll> - horizontal carousel
* Material - <https://material.angular.io> - style
* Rotten Tomatoes - <https://www.rottentomatoes.com> - movie art
* Videogular 2 - <https://github.com/videogular/videogular2> - media player

## Further development
The following features could be considered to improve the app
* Creating a login user interface with the Firebase authentication service
* User information
* Storing the data to a Firebase Realtime/Firecloud database instead of Localstorage
* Subtitles and UI language
* Having the movies and movie art stored on Firebase Storage. This, of course, should be done in a completely legal manner 😇
* Directional buttons could be used to forward/backward the movie
* A loading circle until images are ready
* Render on server side
* Payment solution for paid subscription
* The pager on the view list page could be hidden if less than pager items are shown

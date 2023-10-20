import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "Child" }, [
    React.createElement("h1", {}, "This is namaste react"),
    React.createElement("h1", {}, "I am an h2 Tag"),
  ]),

  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I am an h1 Tag"),
    React.createElement("h1", {}, "I am an h2 Tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

/**
 How to add  (package.json)in Our Project

 Ans --> In the Terminal we need to  type npm init it will ask  for
 1.Package Name
 2.version
 3.description
 4.entry point
 5.test command
 6.git repository
 7.keywords
 8.Author name

 Note--> PACKAGE.JSON Is AN CONFIGUTATION FOR NPM

 Q 2 : Why Do we need this Pakage.json file?

 Ans -->Our project is dependent on lot of Packages  those Packages are the Dependencies of the project and npm manages it like the version of the library
 In Short the Package.json is an configutation for npm
 Package.json keeps the track of all the dependencies in our project

 Q3 : What is  , Webpack, parcel , vite?
 Ans --> Webpack, parcel , vite All these ar bundler
 In a project we have different files (html ,js , css etc) SO the code Inside all the file need to be minified , compressed , cached i.e entire code should be bundled together before it sent production
 So bundler helps us to Achive this. Bundler helps make the code production ready i.e it packages our app properly so that it can sent to production

" Create react app" uses webpack to bundle the code

we will be using parcel bundler


Q4 . How many types of dependencies we have name theme and explain
Ans -->  1. dev-dependencies --> these dependencies are used  when the app is in the development phase

2.normal-Dependencies --> these dependencies are used for the production version

 we install DevDependencies using command "npm install -D packageName"
 

 Q5: DevDependencies : {
    "parcel ":"^2.8.3"
 }
 What is "^" in the devDependencies

 Ans --> "^2.8.3" denotes the version of the package called parcel  if a new minor version(2.8.4) has come in the market then "^"(carate) this will upgrade the version
 It is ok to upgrade the Minor version and notthe Major version(3.0.0)

 Note--> when we add the dependcies using 
 "npm install packageName" then we also recive the file "package.lock.json" and "node modules"

 "^"--> does minor Upgrade
 "~"--> does major upgrade

 Q6 . What is Package.lock.json?

 Ans -->Package.lock.json lock the version of the dependencies i.e it keeps the track of the all dependencis version and does not allow them to upgrade on its own
 Sometimes there may be scenario like the same code base is working in my local but not in the production
 so to Avoid this package.lock.json helps us to maintain the same version of the dependencies in the development as well as in the production

 Q7 . What is node module

 Ans --> Node modules fetches all the code of the  all dependcies into our system (node modules are very heavy)

 Q8. Node modules  has so many folders in it  along with the parcel since we have only install parcel?

 Ans --> Because parcel may also have its own dependencies i.s parcel itself can be dependent on other packages .... SO this chain of dependcies called has "Transitive Dependencies"  so we have so many Packages in the node modules folder
 Every package will have its own Package.json will have its own dependencies

 NOte-NODE MODULES IS COLLECTION OF DEPENDENCIES IT IS  A KIND DATABASE FOR ALL OUR FILES , CODE

 Q9 . What is gitIgnore file ?

 Ans --> If we dont want put some files into not go  github or production then
  we can bypass those files just by passing the name of the file in the gitIgnore file  Files such as node_modules

  But we allow the package.json and package.lock.json to move to git  because they keep the track of the version on dependencies so that the same dependencies version should be forward to the production

  But we dont have to put node modules to github since it has so many files  which will be heavy task to push and pull these files everytime but if we have  package.json and package.lock.json we can  generate(recreate)  node modules file-- for that we need to give the command "npm install" it will again create the node module folder along with all thhe dependencies

  NOTE--> whatever that can be regerate dont put it on git




  Q10 . What is npx parcel index.html?

  Ans -->  just like we have npm similarly we have somthing known as npx ,, npm help to install the particular package but when we want to execute the package we write npx packageName

   npx parcel index.html ---> this will execute the bundler parcel

  npx parcel index.html  ==> in this index.html is th source so this command parcel will go to source and build the development build for our app and it host that development build to local host

  Note --> Installing react through cdn is not the  preferred approach because fetching from cdn is a costly operation since it makes the network call
  Another way to get react is through npm it will install the dependencies into our package.json

  Q11. How to install react through npm?
  Ans --> npm install react npm i react(shortcut of install)

Q 12 .  what does this mean "import React from "react";

Ans -> we are importing the React from the node modules   if not imported and used the React Script it show error "React is not defined"

But in index.html we have the  <script src = "./App.js"></script>
After  importing react we get the error it will show "Browser Scripts cannot have imports or export" error because in our html we are injecting <script src = "./App.js"></script> it treats as browser Scripts a normal js file and normal js file does not have import and export in it so to resolve this we need to tell browser that it is not the nor js file it is a module which allows the import/export statement
So to make normal js to module we nned to add attribute type="module" in the script tag 
<script src="./App.js" type="module"></script>

 

Q13 . what does parcel does for us 
Ans -->  1. Creates the development build
2.it host the local server for us
3. parcel also refresh the page continiously called as Hot module replacement (HMR)  it is basically reading all the file
4.Parcel use file watching algoritm to keep an eye on every file so that whenever there is change it will build the new updated build
5.Parcel also cache builds
6.parcel also does image optimization for us as well
7.parcel will minimize the files
8.parcel will bundle all the files
9.parcel will also compress
10.parcel will removed unused code call as Tree Shaking

Q14 How to bild production build using parcel?

Ans -->  npx parcel build < entry point>
But we will get the error to resolve the error go to package.json and remove the property call "main"  because it act as a entry point  but our entry point is index.html when we use parcel

Q15 how to make the app compatible for older browser?

Ans --> we make use of browserList  which is npm package we have to configure it package.json

InPackage.json we need to write
"browserslist":{
  "last 2 Chrome version"  --> means our app will run only on last 2 chrome version
  "last 2 version"  ---> this will apply to all the browser
}

we can see in the Browserslist.dev how many percent users it covers

 */

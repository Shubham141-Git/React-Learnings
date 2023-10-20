 <h4 > Q: What is Emmet</h4>

<div style = "font-size:20px"> Ans: Emmet is a populaar web development toolkit for improving the efficiency of writing HTML and CSS code. It is primarily used as a plugin or extension for various code editors and (IDEs). Emmet provides shortcuts and abbreviations that help developers write HTML and CSS code more quickly and with less typing.
</div>

 <h4> Q: Difference between Library and Framework</h4>

<div style = "font-size:20px"> Ans:

<h5>Library:</h5>
 <ol>
<li>A library is a collection of pre-written code that you can use to perform common tasks or operations.</li>
<li>By using library we can have control over your application's flow, and can choose when and how to use the library's functions or methods.</li>
</ol>

<h5>Framwork:</h5>
<ol>
<li>A framework is a pre-established structure which has its own flow and architecture of  application.</li>
<li>  when we build the Application with the help of framework we have to follow its conventions and guidelines.</li>
</ol>
In short, libraries provide tools that we can use to perform specific tasks within your application, which gives  more control over the structure and flow of your code. Frameworks, on the other hand, provide a structured foundation for building entire applications, where we have to follw conventions and guidelines , which can help speed up development but may limit flexibility.
</div>

<h4>Q: What is CDN and Why Do we use it?</h4>
<div style = "font-size:20px"> 
Ans:A Content Delivery Network (CDN) is a network of geographically distributed servers that work together to provide fast and efficient delivery of web content to users. CDNs are used to improve the performance, reliability, and scalability of web applications and websites.

<h5>1. Faster Content Delivery:</h5>
<p>CDNs store copies of web content on servers in multiple locations around the world. When a user requests a web page or resource, the CDN can serve it from the server closest to the user. This reduces latency and speeds up content delivery, resulting in faster page load times.</p>

<h5>
2. Load Distribution:</h5>
<p>CDNs help distribute the load of delivering content. When a website experiences high traffic, the CDN can handle a significant portion of the requests, reducing the load on the origin server. This prevents server overload and maintains consistent performance.</p>

<h5>3. Improved Availability:</h5>
<p>CDNs enhance the availability and reliability of web content. If one server in the CDN network becomes unavailable, requests can be automatically routed to other servers that have copies of the content. This redundancy minimizes downtime.</p>

</div>

<h4>Q: Why is React called React</h4>
 The name "React" is derived from its ability to react to changes in data and automatically update the user interface accordingly.
<div style = "font-size:20px">The fundamental idea behind React is the concept of a "reactive" user interface. In a reactive system, when the  data changes, the UI reacts to those changes automatically, updating only the parts of the interface that need to change, without requiring manual intervention. This makes it efficient and responsive, especially for complex and dynamic web applications</div>

</div>

<h5>Key principles of React that align with its name include:</h5>

<h5>Virtual DOM:</h5>

 <div style = "font-size:20px">React uses a virtual representation of the user interface, known as the Virtual DOM. When data changes, React "reacts" by updating the Virtual DOM first. It then efficiently calculates the differences (diffing) between the previous and updated Virtual DOM, and applies only those differences to the actual DOM. This approach minimizes unnecessary updates and enhances performance.
 </div>

<h5>Component-Based:</h5>
 <div style = "font-size:20px">
 React encourages the decomposition of user interfaces into small, reusable components. Each component can "react" independently to changes in its own data, making it easier to manage and maintain complex UIs.</div>

<h5>Unidirectional Data Flow: </h5>
 <div style = "font-size:20px">
React follows a unidirectional data flow. Data flows from parent components to child components. When data changes at the top level, it flows down the component hierarchy, triggering updates as needed
</div>

<h4> Q: What is cross-origin in the script tag</h5>

 <ol>
 <li>
The "cross-origin"  in the context of a script tag  tells about to the security policy known as the "Same-Origin Policy." This policy is a fundamental web security measure designed to protect user data and privacy.
</li>
<li>
The Same-Origin Policy dictates that web pages can only make requests (such as loading scripts) to the same origin (domain, protocol, and port) from which the web page originated. If you try to load a script from a different origin, the browser will block it due to security concerns.
</li>

<li>
For example, if you have a web page hosted at https://example.com, and you try to load a script from https://anotherdomain.com, you'll likely encounter a "cross-origin" issue. The browser will prevent the script from being executed to protect against potential security threats, like cross-site scripting (XSS) attacks.
</li>
</ol>

<div>
<h4>Q: What is difference  React and react-DOM</h4>

<h5>React and ReactDOM are two differentt libraries in the React and serve different purposes:</h5>
<ul>
<h5>React:</h5>

<li><div style ="margin-bottom :15px">React is the core library for building user interfaces in the React ecosystem.</div></li>

<li><div style ="margin-bottom :15px">It provides the  concepts for creating and managing components, handling state and props, and rendering UI elements.</div></li>

<h5>React-DOM:</h5>

<li><div style ="margin-bottom :15px">
ReactDOM is a specific package within react which deals with rendering React components in the web browser.
</div></li>

<li>
<div style ="margin-bottom :15px">It provides the necessary functionality to take the components you've built using React and render them into the actual DOM (the structure of a web page).</div></li>
<li>
<div style ="margin-bottom :15px">ReactDOM is used when you want to create web applications and render your React components in a web browser.</div></li>
</ul>

In short, React is the core library for building user interfaces, providing the foundation for creating components and managing their behavior. ReactDOM is a package within the React ecosystem specifically designed for rendering those components into the web browser's DOM.

</div>

<div>

<h4>Q: Difference between react.development.js and react.production.js files via CDN<h4>

<h5>react.development.js:</h5>
<ol>
<li>This file is meant for development and debugging purposes.</li>

<li>This file contains helpful error messages and warnings that are designed to assist developers in identifying and fixing issues in their code.</li>
<li>The file is larger in size because it includes additional development-related code and checks.</li>
<li>When you use react.development.js, you'll receive more detailed error messages and warnings in the browser's console, making it easier to diagnose problems during development.</li>

</ol>
<h5>react.production.js:</h5>

<ol>
<li>This file is intended for production use, meaning it's used when your application is ready to be deployed to a live environment.</li>
<li>It has been optimized for performance and is smaller in size compared to the development version.</li>
<li>Most of the error-checking and warning messages have been removed or minimized to reduce the size of the file and improve runtime performance.</li>
<li>When using react.production.js, your application should run more efficiently, but you may receive less detailed error information in the console, making it less suitable for debugging.</li>
</ol>

</div>

<div>

<h4> Q: what is Async and Defer</h4>

<ul>
<li>  Asyncs and defer are the attributes which are used along with script tag to load the external script efficiently to a web page</li>
<li>when we use the async atrribute in script tag it will fetch the script from the network while it is parsing the  html(in parallel). Once the script are available the html parsing stops and scripts are executed then and there after completion from script execution then it will continue html parsing i.e async will block the html parsing </li>
<li>when we use the defer atrribute in script tag it will fetch the script from the network while it is parsing the  html(in parallel). and it will execute the scripts after the html parsing is completed  i.e it will not block the html parsing </li>
<ul>
</div>

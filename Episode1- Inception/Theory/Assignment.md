 <h4 > Q: What is Emmet</h4>

<div style = "font-size:20px"> Ans: Emmet is a popular and powerful web development toolkit for improving the efficiency of writing HTML and CSS code. It is primarily used as a plugin or extension for various code editors and integrated development environments (IDEs). Emmet provides shortcuts and abbreviations that help developers write HTML and CSS code more quickly and with less typing.
</div>

 <h4> Q: Difference between Library and Framework</h4>

<div style = "font-size:20px"> Ans:

<h5>Library:</h5>
 <ol>
<li>A library is a collection of pre-written code that you can use to perform common tasks or operations.</li>
<li>You have control over your application's flow, and you can choose when and how to use the library's functions or methods.</li>
</ol>

<h5>Framwork:</h5>
<ol>
<li>A framework is a pre-established structure that dictates the flow and architecture of your application.</li>
<li>Your application is built within the framework, and you must adhere to its conventions and guidelines.</li>
</ol>
In summary, libraries provide tools that you can use to perform specific tasks within your application, giving you more control over the structure and flow of your code. Frameworks, on the other hand, provide a structured foundation for building entire applications, with conventions and guidelines that you must follow, which can help speed up development but may limit flexibility.
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

<h5>3. Scalability:</h5>

<p>CDNs are designed to scale with the growth of web traffic. As a website's audience expands, the CDN can efficiently handle increased demand without the need for significant infrastructure changes.</p>

<h5>4. Cost Savings:</h5>
<p>By offloading the delivery of web content to a CDN, websites can reduce the amount of traffic they need to handle on their origin server. This can lead to cost savings in terms of server infrastructure and bandwidth.</p>
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

<div>

<h5> Q: What is cross-origin in the script tag</h5>

 <div style = "font-size:20px">
 <div>
The "cross-origin"  in the context of a script tag  tells about to the security policy known as the "Same-Origin Policy." This policy is a fundamental web security measure designed to protect user data and privacy.
</div>
<div>
The Same-Origin Policy dictates that web pages can only make requests (such as loading scripts) to the same origin (domain, protocol, and port) from which the web page originated. If you try to load a script from a different origin, the browser will block it due to security concerns.
</div>

<div>
For example, if you have a web page hosted at https://example.com, and you try to load a script from https://anotherdomain.com, you'll likely encounter a "cross-origin" issue. The browser will prevent the script from being executed to protect against potential security threats, like cross-site scripting (XSS) attacks.
<div>
 </div>

</div>

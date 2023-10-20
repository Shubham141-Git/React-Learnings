 <h4 > Q: What is JSX</h4>

<div style = "font-size:20px"> 
JSX STands For JavaScript XML . JSX allows us write HTML like syntax into the JavaScript . Throuugh which we can directly code the HTML structure of any component 
But the JS Engine doesn't understand the JSX Code. so this code is converted into new code Which js engine Undrstand .This conversion is DOne with the help of the package called BABEL .

<script>

{"<h1>This is an react Element</h1>"}
<br>

"Babel will convert this piece of code into"
<br>

"React.createElement("h1" , {} , "This is an react Element")"

 "the Above code is interpreted by the browser and is rendered on the screen"
 <br>


</script>

JSX makes the code developer friendly which result into Readable code.
<br>

In short JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods. JSX makes it easier to write and add HTML in React. JSX converts HTML tags into react elements.

Example 1 using JSX:

<script>

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);
</script>

Example 2 Without JSX:

<script>
// const myElement = React.createElement('h1', {}, 'I do not use JSX!');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(myElement);  const myElement = <h1>I Love JSX!</h1>;

</script>

</div>

 <h4 > Q: What is super power of JSX</h4>

 <div style = "font-size:20px"> 
 
The type attribute in the script tag specifies the  content type of the script within the tag. It tells the browser how to interpret and execute the script.
It has a Default value which is “text/javascript”.
<div>
1.For JavaScript modules, use type="module". This is used when you're working with ES6 modules and importing/exporting JavaScript code.
</div>
<div>
2.JSON Data: If you're embedding JSON data within a script tag, you can use type="application/json". The data inside the tag should be well-formed JSON.
<div>

 </div>

<h4>{{TitleComponent} vs {"TitleComponent/"} vs "TitleComponent>TitleComponent/> }</h4>

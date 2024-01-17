/* Creating a nested structure. 

<div id="parent">

<div id="child">
<h1> I'm an H1 Tag </h1>
<h2> I'm an H2 Tag </h2>
</div>

</div>

*/

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement("h1", {}, "I'm an H1 Tag"), React.createElement("h2", {}, "I'm an H2 Tag")]
  )
);


const root = ReactDOM.createRoot(document.getElementById("root"));

console.log(parent); // this is a React element. & React Element is nothing but a js object

root.render(parent);

// ReactDOM.render(<h1>Hello, Everyone</h1>, document.getElementById("root"))

// reactDOM.render(<p>Hi, my name is bob!</p>, document.getElementById("root"))

// ReactDOM.render(<ul><li>Thing 2</li></ul>, document.getElementById("root"))


 // function Manincontent() {
//     return (
//         <h1> I'm learning react</h1>
//     )
// }
// ReactDOM.render(
//     <div>
//         <Manincontent />
//     </div>, 
//     document.getElementById("root")
// )


// const h1 = document.createElement("h1")
// h1.textContent = "This is an imperative way to program"
// h1.className = "header"
// document.getElementById("root"). append(h1)


//----<h1 class ="header">------
// const element = <h1 className = "header">This is JSX</h1>
// console.log(element)
// // ----JSX----
// ReactDOM.render(element, document.getElementById("root"))


// ----JSX----
// ReactDOM.render(<h1 className = "header">This is JSX</h1>, document.getElementById("root"))

// const page = (
// <div>
// <h1 className = "header">This is JSX</h1>
// <p>This is a paragrap</p>
// </div>)
// console.log(page)
// ReactDOM.render(
// page, document.getElementById("root"))





/*
Challenge:
Create a navbar in JSX:
    - Use the semantic 'nav' element as the parent wrapper
    - Have an h2 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        -Inside the 'ul', have three 'li' s for "pricing", "About", and "Contact"
    - Don't worry about stylying yet - it'll just be plain-looking HTML for now
    */

// const navbar = (
//     <nav>
//         <h1>Bob's Bistro</h1>
//         <ul>
//             <li>Menu</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )
// ReactDOM.render(navbar, document.getElementById("root"))





/*
Challenge: fix our code

Don't forgot, you not using CDNs anymore, so there's no global "ReactDOM" variable to use anymore
*/

// const page = (
//     <div>
//         <h1>My awesome website in React</h1>
//         <h3>Reasons I love React</h3>
//         <ol>
//             <li>It's composable</li>
//             <li>It's declarative</li>
//             <li>It's a hireable skill</li>
//             <li>It's actively maintained by skilled people</li>
//         </ol>
//     </div>
// )
// // document.getElementById("root").append(JSON.stringify(page))
// ReactDOM.render(page, document.getElementById("root"))




/*
Challenge: Starting from scratch, build and render the HTML for our section project. Check the Google slide for what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can access it by  using 'src="./react-logo.png"' in  your image element.
* You can also set the 'width' attribute of the image element
just like in HTML. In the slide, I have it set to 40px.
*/

// const page = (
//     <div>
//         <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width="40px" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jorden Walker</li>
//             <li>Has well over 100k stars on GitHub</li>
//             <li>Is maintained by Facebook</li>
//             <li>Power thousand of enterprise apps, including mobile apps</li>

//         </ul>
//     </div>
// )
// ReactDOM.render(page, document.getElementById("root"))
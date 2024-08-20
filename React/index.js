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



//-------------------------------------------------//
//----<h1 class ="header">------
// const element = <h1 className = "header">This is JSX</h1>
// console.log(element)
// // ----JSX----
// ReactDOM.render(element, document.getElementById("root"))



//-------------------------------------------------//
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




//-------------------------------------------------//
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




//-------------------------------------------------//
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



//-------------------------------------------------//
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



//-------------------------------------------------//
// ----- 13. Build a React info site | Custom Components part 1----
/*
Challenge:
Part 1: Create a page of your own using a custom page component

It should return an ordered list with the reasons why you're excited to be learning React :)

Render your list to the page

*/

// function Page(){
// return(
//     <ol>
//         <li>It's popular library, so I'll be able to fit in with the cool kids </li>
//         <li>I'm more likely to get a job as a developer if I know React </li>
//     </ol>
// )
// }
// ReactDOM.render(<Page/>, document.getElementById("root"))



//-------------------------------------------------//
// ----- 14. Build a React info site | Custom Components part 2----
/*
Challenge:

Part 2:
- Add a `header` element with a nested `nav` element. Inside the `nav`, include a `img` element the image to the React logo inside (src = "..........") and make sure to set the width to something more manageable so it doesn't take up the whole screen.
- Add an `h1` with some text describing the page. (E.g. "Reasons I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says:
"copyright 20xx <laast name here> development. All right reserved."

*/

// function Page(){
// return(
//     <div>
//         <header>
//             <nav>
//                 <img src = "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width= "40px"/>
//             </nav>
//         </header>
//             <h1>Reasons I'm excited to learn React</h1>
//             <ol>
//                 <li>It's popular library, so I'll be able to fit in with the cool kids </li>
//                 <li>I'm more likely to get a job as a developer if I know React </li>
//             </ol>
//         <footer>
//         <small>copyright 2024 last name here development. All right reserved</small>
//         </footer>
//     </div>
// )
// }
// ReactDOM.render(<Page/>, document.getElementById("root"))



//-------------------------------------------------//
// ----- 16. Build a React info site | Parent/Child Components ----
/*
mini Challenge:
- Move the `header` element from page into its own component called "Header"
- Move the `footer` into its own component called "Footer"
- Move the `h1` and `ol` together into component called "MainContent" and render inside page as well.
*/

// function Header(){
//     return(
//         <header>
//             <nav>
//                 <img src = "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" width= "40px"/>
//             </nav>
//         </header>
//     )
// }

// function Footer(){
//     return(
//         <footer>
//             <small>copyright 2024 last name here development. All right reserved</small>
//         </footer>
//     )
// }

// function MainContent(){
//     return(
//         <div>
//             <h1>Reasons I'm excited to learn React</h1>
//             <ol>
//                 <li>It's popular library, so I'll be able to fit in with the cool kids </li>
//                 <li>I'm more likely to get a job as a developer if I know React </li>
//             </ol>
//     </div>
//     )
// }

// function Page(){
// return(
//     <div>
//         <Header/>
//         <MainContent/>
//         <Footer/>
//     </div>
// )
// }
// ReactDOM.render(<Page/>, document.getElementById("root"))



//-------------------------------------------------//
// ----- 17. Build a React info site | Styling with Classes ----
/*
Challenge:
- Add an `ul` inside the Header's `nav` and create the following `li`s: "Pricing", "About", & "Content"
- Using flexbox, line up the nav items horizontally, and put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line for pratice, add a new class to the image in order to style it.
*/

// function Header(){
//     return(
//         <header className="header">
//             <nav className="nav">
//                 <img src = "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className="nav-logo"/>
//                 <ul className="nav-items">
//                     <li>Pricing</li>
//                     <li>About</li>
//                     <li>Contact</li>
//                 </ul>
//             </nav>
//         </header>
//     )
// }

// function Footer(){
//     return(
//         <footer className="footer">
//             <small>copyright 2024 last name here development. All right reserved</small>
//         </footer>
//     )
// }

// function MainContent(){
//     return(
//         <div>
//             <h1>Reasons I'm excited to learn React</h1>
//             <ol>
//                 <li>It's popular library, so I'll be able to fit in with the cool kids </li>
//                 <li>I'm more likely to get a job as a developer if I know React </li>
//             </ol>
//     </div>
//     )
// }

// function Page(){
// return(
//     <div>
//         <Header/>
//         <MainContent/>
//         <Footer/>
//     </div>
// )
// }
// ReactDOM.render(<Page/>, document.getElementById("root"))



//-------------------------------------------------//
// ----- 18. Build a React info site | Organize Components ----
/*
Challenge:
- 
*/

import Header from "./Header.js"

function Footer(){
    return(
        <footer className="footer">
            <small>copyright 2024 last name here development. All right reserved</small>
        </footer>
    )
}

function MainContent(){
    return(
        <div>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>It's popular library, so I'll be able to fit in with the cool kids </li>
                <li>I'm more likely to get a job as a developer if I know React </li>
            </ol>
    </div>
    )
}

function Page(){
return(
    <div>
        <Header/>
        <MainContent/>
        <Footer/>
    </div>
)
}
ReactDOM.render(<Page/>, document.getElementById("root"))
# React-Learning


    <!-- <script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script> -->
    <!-- This file i.e. react.development.js contains React Code which is plain JS -->

    <!-- <script
      crossorigin
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
    ></script> -->
    <!-- This file i.e. react-dom.development.js is useful for DOM operations or use to modify the DOM -->



    <!-- <script>
        const root = document.getElementById("root");
        const h1 = document.createElement("h1");

        h1.innerHTML = "Hello World from JavaScript!";
        root.appendChild(h1);
    </script> -->

#####################

  # Parcel

    - Dev Build
    - Local Server
    - HMR = Hot Module Replacement
    - File Watching Algorithm - written in C++
    - Caching - Faster Builds
    - Image Optimization (Loading Images aka most expensive operation)
    - Minification
    - Bundling
    - Compress
    - Consistent/ Content Hashing
    - Code Splitting
    - Differential Bundling - support older browsers
    - Diagnostic
    - Error Handling
    - HTTPs
    - Tree Shaking - remove unused code
    - Different dev and prod bundles


// React Functional Component
// const HeadingComponent = () => {
//     return <h1 className="heading">Namaste React Functional Component</h1>;
// };
// const HeadingComponent2 = () => <h1 className="heading">Namaste React Functional Component</h1>;

// React.createElement => Object => HTMLElement(render)

// const heading = React.createElement("h1", { id: "heading" }, "Namaste React 🚀");

//JSX - (transpiles before it reaches the JS Engine) - PARCEL - Babel

//JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)

// React Element


// React App Structure - #Namaste Food

/*
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - RestaurantContainer
 *    - RestaurantCard
 *       - Image
 *       - Name of Restaurant, Star Ratings, cuisine, delivery time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

// worst option <<<< good option <<<<< best option
// not using keys (not acceptable) <<<< index as key <<<<< unique id as key (best practice)

Two types of exports:

- Default Export/Import

export default <name of variable/Component>
import Component/variable from "path"

- Named Export/Import

export const Component/Variable
import {Component/Variable} from "path"

# React Hooks
  (Normal JS utility functions)
  - useState() - Superpowerful State Variables in React
  - useEffect()

  - State Variables are in sync with the UI Layer of the React App and as soon as any changes take place in it, the UI refreshes and also changes alongside it automatically. This is what we call Render. 

  - Easily put, whenever a state variable CHANGES, React RE-RENDERS that component. Hence, keeping UI Layer and Data Layer in sync and making DOM operations faster. (a challenge which is faced when using vanilla JavaScript and is solved by React and other frameworks like Angular and Vue).

  Why is React fast? Efficient DOM manipulation done via Virtual DOM aka JavaScript representation of the HTML of a website. React can find out difference between old and new UI changes and update the UI quickly and efficiently. Hence, this is why it is fast.

  - Virtual DOM, React Fiber and Reconciliation (**)

  - const [listOfRestaurants, setListOfRestaurants] = useState("")
      is the same thing as 
    const arr = useState([]);
    const [listOfRestaurants, setListOfRestaurants] = arr;
      is the same thing as
    const listOfRestaurants = arr[0];
    const setListOfRestaurants = arr[1];
    AKA Array Destructuring in JavaScript.
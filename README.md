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
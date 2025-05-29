# NAMASTE REACT 🚀

# Parcel (bundler)
- Dev Build
- Local Server
- HMR[Hot module replacement] - Auto refresh page
- File Watching Algorithm - Written in C++
- Faster builds using Caching
- Image Optimization
- Minification of files
- Bundling
- Compressing files
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers[different bundle for different platform]
- Diagnostics
- Error Handling
- Host your app on https
- Tree Shaking - remove ununsed code
- HTTPs
- Diff. dev and prod bundles

# Food ordering app
/**
* Header
  - logo
  - Nav Items
* Body
  - Search
  - RestaurantContainer
      - RestaurantCard
        - img
        - Name of restaurant, rating, cuisine, delivery time
* Footer
  - Copyright
  - Links
  - Address
  - Contact
*/


// inline style(css)
// const styleCard = {
//   backgroundColor: "LightGray"
// }


// const RestaurantCard = (props) => {
// destructuring
const { resData } = props;
const { name, cuisines, costForTwo, avgRating, sla} = resData?.info;


# Two types of Export/Import

1. Default Export/Import

export default Component/Variable;
import Component from "path";

2. Name Export/Import

export const Component/Variable;
import {Component/Variable} from "path";

# State variable
1. we use hooks - useState()
hook - normal js function, comes with superpower

# H/w
1. can we export default and named together?

# Note:
1. Keep component files as smaller as possible e.g 100 lines

# State variable
1. we can use hooks - useState()
hook - normal js function, comes with superpower

# React Hooks
(Normal JS utility functions written by meta devs)
- useState() - Superpowerful React State Variables
- useEffect()
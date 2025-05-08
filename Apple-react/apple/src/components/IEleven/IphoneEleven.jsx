
import iphone from '../../assets/images/home/iphone11-bg.jpg'
// const IphoneEleven = () => {
//   return(
//   <div class="top-100">
//       <div class="container-fluid">
//         <section class="eleven"   style={{ backgroundImage: `url(${iphone})` }}>
//           <div>
//             <h3 class="name">iPhone 11</h3>
//             <p class="description">Just the right amount of everything.</p>
//             <p class="price">From $16.62/mo. or $399 with trade‑in.</p>
//           </div>
//           <div class="promotioneleven">
//             <ul>
//               <li>
//                 <a href="#">Learn more </a>
//               </li>
//               <li class="buy">
//                 <a href="#">Buy </a>
//               </li>
//             </ul>
//           </div>
//         </section>
//       </div>
//     </div>
//   )
// }

// export default IphoneEleven;

import React, { Component } from 'react'

 class IphoneEleven extends Component {
  render() {
    return (
      <div>
        <div class="top-100">
       <div class="container-fluid">
         <section class="eleven"   style={{ backgroundImage: `url(${iphone})` }}>
           <div>
             <h3 class="name">{this.props.a}</h3>
             <p class="description">{this.props.b}</p>
             <p class="price">{this.props.c}</p>
           </div>
           <div class="promotioneleven">
             <ul>
               <li>
                 <a href="#">Learn more </a>
              </li>
              <li class="buy">
                <a href="#">Buy </a>
              </li>
             </ul>
           </div>
         </section>
       </div>
     </div>
      </div>
    )
  }
}

export default IphoneEleven;

import macpro from '../../assets/images/home/macbook-pro.jpg'
 const Banners = () => {
  return(
  <div class="top-100">
      <div class="container">
        <div class="macinch">
          <p class="inch">16-inch model</p>
        </div>
        <div class="mac">
          <h3>MacBook Pro</h3>
        </div>
        <div class="best">
          <p>The best for the brightest.</p>
        </div>
        <div class="promotion">
          <ul>
            <li>
              <a href="#">Learn more </a>
            </li>
            <li class="buy">
              <a href="#">Buy </a>
            </li>
          </ul>
        </div>
        <div class="macphoto">
          <img src={macpro} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Banners;
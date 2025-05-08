import Macbook from '../../assets/images/home/macbook-pro.jpg'
import ipad from '../../assets/images/home/new-ipad.jpg'
import ipadl from '../../assets/images/icons/new-ipad-logo.png'

const MacIpad = (params) => {
  return(
  <div class="macipad row">
  <div class="col-md-6">
    <div class="macboo" style={{ backgroundImage: `url(${Macbook})` }}>
      <div class="m">
        <p class="i">16-inch model</p>
      </div>
      <div class="names">
        <h3>MacBook Pro</h3>
      </div>
      <div class="description">
        <p>The best for the brightest.</p>
      </div>
      <div class="promotion">
        <ul>
          <li>
            <a href="#">Learn more </a>
          </li>
          <li class="buy">
            <a href="#">Buy</a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="col-md-6">
    <div class="ipad" style={{ backgroundImage: `url(${ipad})` }}>
      <div class="ipad-lg">
        <img src={ipadl} alt="" />
      </div>
      <div class="comp">
        <p>Like a computer. Unlike any computer.</p>
      </div>
      <div class="promotion">
        <ul>
          <li>
            <a href="#">Learn more </a>
          </li>
          <li class="buy">
            <a href="#">Buy</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
  )
}

export default MacIpad;

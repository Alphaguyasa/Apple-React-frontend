
import airpods from '../../assets/images/home/air-pods.jpg'
import tv from '../../assets/images/home/apple-tv-background.jpg'
import servantl from '../../assets/images/icons/servant-logo.png'
import tvl from '../../assets/images/icons/apple-tv-logo.png'
const AirPodsTv = () => {
  return(
    <div class="row">
      <div class="col-md-6">
        <div class="tv" style={{ backgroundImage: `url(${tv})` }}>
          <div>
            <img src={tvl} alt="" />
          </div>
          <div class="servant">
            <img src={servantl} alt="" />
          </div>
          <div class="watchtrailer">
            <a href="#">Watch the trailer</a>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="airpods" style={{ backgroundImage: `url(${airpods})` }}>
          <div>
            <h3 class="name">AirPods Pro</h3>
            <p class="description">Magic like you’ve never heard.</p>
          </div>
          <div class="promotioneleven">
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

export default AirPodsTv;

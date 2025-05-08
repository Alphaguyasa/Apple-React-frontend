
import watch from '../../assets/images/home/watch-series-5.jpg'
import apple from '../../assets/images/home/apple-card.jpg'
import watchl from '../../assets/images/icons/watch-series5-logo.png'
import applel from '../../assets/images/icons/apple-card-logo.png'
const WatchCards = (params) => {
  return(
  <div class="row">
      <div class="col-md-6">
        <div class="watchseries" style={{ backgroundImage: `url(${watch})` }}> 
          <div class="watch">
            <img src={watchl} alt="" />
          </div>
          <div class="descwrap">
            <p>
              With the new Always-On Retina display. You’ve never seen a watch
              like this.
            </p>
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
      <div class="col-md-6">
        <div class="applecarddiv" style={{ backgroundImage: `url(${apple})` }}>
          <div class="cards">
            <img src={applel} alt="" />
          </div>
          <div class="descwrap">
            <p>Get 3% Daily Cash on purchases from Apple using Apple Card.</p>
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

export default WatchCards;

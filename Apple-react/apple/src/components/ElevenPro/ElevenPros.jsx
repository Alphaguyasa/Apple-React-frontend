
import pro from '../../assets/images/home/iphone11-pro-bg.jpg'
const ElevenPros = (params) => {
  return(
<div class="top-100">
      <div class="container-fluid">
        <section class="elevenpro" style={{ backgroundImage: `url(${pro})` }}>
          <div>
            <h3 class="name">iPhone 11 Pro</h3>
            <p class="description">
              Pro cameras. Pro display. Pro performance.
            </p>
            <p class="price">From $24.95/mo. or $599 with trade‑in.</p>
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
  )
}

export default ElevenPros;
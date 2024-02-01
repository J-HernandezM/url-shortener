import './Main.scss'
import iconBrand from '../../assets/images/icon-brand-recognition.svg'
import iconDetailed from '../../assets/images/icon-detailed-records.svg'
import iconFully from '../../assets/images/icon-fully-customizable.svg'

function Main () {
  return (
    <main>
      <form>
        <div className="form-input-box">
          <input required type="url" name="url" id="url" placeholder='Shorten a link here...' aria-invalid="false" aria-describedby='url-error'/>
          <span id='url-error'>Please add a link</span>
        </div>
        <button className='form-btn'>Shorten it!</button>
      </form>
      <section>
        <div className="main-info">
          <h3>Advanced Statistics</h3>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className="main-cards">
          <div className='cards'>
            <div className='card-icon-box'>
              <img className='card-icon' src={iconBrand} alt="Brand recognition detailed" />
            </div>
            <p className='card-title'>Brand Recognition</p>
            <p className='card-description'>Boost your brand recognition with each click. Generic links don&apos;t mean a thing. Branded links help instil confidence in your content.</p>
          </div>
          <div className='cards'>
            <div className='card-icon-box'>
              <img className='card-icon' src={iconDetailed} alt="Detailed records icon" />
            </div>
            <p className='card-title'>Detailed Records</p>
            <p className='card-description'>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </div>
          <div className='cards'>
            <div className='card-icon-box'>
              <img className='card-icon' src={iconFully} alt="Fully customizable icon" />
            </div>
            <p className='card-title'>Fully Customizable</p>
            <p className='card-description'>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main

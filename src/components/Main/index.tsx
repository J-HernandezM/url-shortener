import './Main.scss'
import iconBrand from '../../assets/images/icon-brand-recognition.svg'
import iconDetailed from '../../assets/images/icon-detailed-records.svg'
import iconFully from '../../assets/images/icon-fully-customizable.svg'

interface CardProps {
  title: string
  description: string
  image: string
}

const cards = [
  {
    title: 'Brand Recognition',
    description: 'Boost your brand recognition with each click. Generic links don&apos;t mean a thing. Branded links help instil confidence in your content.',
    image: iconBrand
  },
  {
    title: 'Detailed Records',
    description: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    image: iconDetailed
  },
  {
    title: 'Fully Customizable',
    description: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    image: iconFully
  }
]

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
          {cards.map((card) =>
            <Card
              title={card.title}
              description={card.description}
              image={card.image}
              key={card.title}
            />)}
        </div>
      </section>
    </main>
  )
}

function Card ({ title, description, image }: CardProps) {
  return (
    <div className='cards'>
      <div className='card-icon-box'>
        <img className='card-icon' src={image} alt="Brand recognition detailed" />
      </div>
      <p className='card-title'>{title}</p>
      <p className='card-description'>{description}</p>
    </div>
  )
}

export default Main

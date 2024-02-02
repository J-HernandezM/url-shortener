import './Main.scss'
import iconBrand from '../../assets/images/icon-brand-recognition.svg'
import iconDetailed from '../../assets/images/icon-detailed-records.svg'
import iconFully from '../../assets/images/icon-fully-customizable.svg'
import { useState, type FormEvent } from 'react'

interface CardProps {
  title: string
  description: string
  image: string
}

interface UrlProps {
  oldLink: string
  newLink: string
  id?: `${string}-${string}-${string}-${string}-${string}`
}

const API = 'https://thingproxy.freeboard.io/fetch/https://cleanuri.com/api/v1/shorten'

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
  const [links, setLinks] = useState<UrlProps[]>([])

  const addLink = (e: FormEvent) => {
    e.preventDefault()
    const input = (e.target as HTMLFormElement)[0] as HTMLInputElement
    const text = input.value
    void postLink(text)
  }

  const postLink = async (t: string) => {
    try {
      const response = await fetch(API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'url=' + encodeURIComponent(t)
      })
      const data = await response.json()

      const newObject = {
        oldLink: t,
        newLink: data.result_url,
        id: crypto.randomUUID()
      }
      setLinks([...links, newObject])
    } catch (e) {
      console.log('An error ocurred', e)
    }
  }

  return (
    <main>
      <form onSubmit={addLink}>
        <div className="form-input-box">
          <input required type="url" name="url" id="url" placeholder='Shorten a link here...' aria-invalid="false" aria-describedby='url-error'/>
          <span id='url-error'>Please add a link</span>
        </div>
        <button className='form-btn'>Shorten it!</button>
      </form>
      <section className='main-urls'>
        {links.map((link) => <UrlBox key={link.id} oldLink={link.oldLink} newLink={link.newLink}/>)}
      </section>
      <section className='main-data'>
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

function UrlBox ({ oldLink, newLink }: UrlProps) {
  const copyThis = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const button = e.target

    if (!(button instanceof HTMLButtonElement)) { return }
    if (!(button.previousElementSibling instanceof HTMLAnchorElement)) { return }

    const text = button.previousElementSibling.innerHTML
    const clipboard = navigator.clipboard

    clipboard.writeText(text).then(() => {
      button.classList.add('copied')
    }, () => {
      alert('Something went wrong while copying to clipboard')
    })
  }

  return (
    <div className="url-box">
      <p className="url-old">{oldLink}</p>
      <hr />
      <div className='url-separate'>
        <a href={newLink} target='_blank' className="url-new" rel="noreferrer">{newLink}</a>
        <button onClick={copyThis} className="url-copy"></button>
      </div>
    </div>
  )
}

export default Main

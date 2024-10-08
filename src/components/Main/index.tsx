import './Main.scss'
import iconBrand from '../../assets/images/icon-brand-recognition.svg'
import iconDetailed from '../../assets/images/icon-detailed-records.svg'
import iconFully from '../../assets/images/icon-fully-customizable.svg'
import { useState, type FormEvent } from 'react'
import Card from './Card'
import UrlBox, { type UrlProps } from './UrlBox'

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
  let localStorageLinks: UrlProps[] = []

  const result = localStorage.getItem('links')
  localStorageLinks = (result != null) ? JSON.parse(result) : []

  const addLink = (e: FormEvent) => {
    e.preventDefault()
    const input: HTMLInputElement | null = document.querySelector('#url')
    if (input === null) { return }
    const text = input.value
    if (text === '') {
      input.setAttribute('aria-invalid', 'true')
      return
    }
    void postLink(text, input)
  }

  const postLink = async (t: string, i: HTMLInputElement) => {
    try {
      const res = await fetch('/api/shortening', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ t })
      })
          
      if (!res.ok) {
        throw new Error('Failed to shorten link')
      }
      
      const data = await res.json()
      i.setAttribute('aria-invalid', 'false')

      const newObject = {
        oldLink: t,
        newLink: data.result_url,
        id: crypto.randomUUID()
      }

      setLinks([...links, newObject])
      localStorage.setItem('links', JSON.stringify([...localStorageLinks, newObject]))
    } catch (e) {
      console.error(e)
      i.setAttribute('aria-invalid', 'true')
    }
  }

  return (
    <main>
      <form role='form' onSubmit={addLink}>
        <div className="form-input-box">
          <input role="input" type="url" name="url" id="url" placeholder='Shorten a link here...' aria-invalid="false" aria-describedby='url-error'/>
          <span id='url-error'>Please add a valid link</span>
        </div>
        <button aria-label='form-btn' className='form-btn'>Shorten it!</button>
      </form>
      <section role='main-urls' className='main-urls'>
        {localStorageLinks.map((link) => <UrlBox key={link.id} oldLink={link.oldLink} newLink={link.newLink}/>)}
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

export default Main

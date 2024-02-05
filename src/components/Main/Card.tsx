interface CardProps {
  title: string
  description: string
  image: string
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

export default Card

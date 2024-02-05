export interface UrlProps {
  oldLink: string
  newLink: string
  id?: `${string}-${string}-${string}-${string}-${string}`
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

export default UrlBox

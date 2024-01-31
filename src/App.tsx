// @styles
import './App.scss'

// @components
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App () {
  return (
    <div className='limit'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App

import {About, Hero, RootLayout,Projects, Talk} from './components'
import Test from './components/text'






function App() {
  return (
    <>
    <RootLayout className=' flex flex-col items-center  justify-center mb-8 '>
      <Hero/>
      <About/>
      <Projects/>
      <Talk/>
      <Test/>
    </RootLayout>
    
    </>
  )
}

export default App

import {About, Hero, RootLayout, Section,Projects, Talk} from './components'

function App() {
  return (
    <>
    <RootLayout className='flex-col items-center justify-center mb-8 '>
      <Hero/>
      <About/>
      <Projects/>
      <Talk/>
    </RootLayout>
    </>
  )
}

export default App

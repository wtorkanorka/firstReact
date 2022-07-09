import Header from './components/Header/Header'
import './App.css'
import Hero from './components/Hero/Hero.js'
import AboutUs from './components/AboutUs/AboutUs'
import './reset.css'
import OurExpereince from './components/OurExpereince/OurExpereince'
import fileIcon from './assets/icons/icon-file.svg'
import moreLess from './assets/icons/more-less.svg'
import gear from './assets/icons/gear.svg'
import shareBoxLine from './assets/icons/share-box-line.svg'

function App() {
  const file = [
    {
      description: 'block-1',
      icon: fileIcon,
      text: 'World leader in consulting and finance',
      backgroundColor: '#FF5300',
      boxShadow: 'box-shadow: 4px 5px 15px rgba(255, 83, 0, 0.4);',
    },
    {
      description: 'block-2',
      icon: moreLess,
      text: 'A focused team with a specialized skill',
      backgroundColor: '#7B7B7B',
      boxShadow: 'box-shadow: 4px 5px 15px rgba(0, 0, 0, 0.4);',
    },
    {
      description: 'block-3',
      icon: gear,
      text: 'Trusted and professional advisors for you',
      backgroundColor: '#00ACFF',
      boxShadow: 'box-shadow: 4px 5px 15px rgba(0, 194, 255, 0.4);',
    },
    {
      description: 'block-4',
      icon: shareBoxLine,
      text: 'A focused team with a specialized skill',
      backgroundColor: '#373737',
      boxShadow: 'box-shadow: 4px 5px 15px rgba(0, 0, 0, 0.4);',
    },
  ]
  let OurExpereinceContent = [
    {
      text: '250+',
      description: 'Global Customer',
    },
    {
      text: '156+',
      description: 'Project Completed',
    },
    {
      text: '50+',
      description: 'Team Member',
    },
    {
      text: '15+',
      description: 'Our Company',
    },
  ]
  return (
    <>
      <Header />
      <Hero />
      <AboutUs file={file} />
      <OurExpereince file={OurExpereinceContent} />
    </>
  )
}

export default App

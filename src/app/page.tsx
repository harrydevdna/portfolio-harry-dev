import AboutMe from '@/components/AboutMe'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Experiences from '@/components/Experiences'
import Navbar from '@/components/Navbar'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <div className='bg-gradient-to-b from-cyan-50 from-0% via-cyan-100 via-50% to-cyan-50 to-100% dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-800 dark:to-gray-700'>
      <Navbar />
      <AboutMe />
      <Skills />
      <Experiences />
      <Certifications />
      <Contact />
    </div>
  )
}

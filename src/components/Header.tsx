const Header = () => {
  return (
    <div>
      <main>
        <section id="about-me" className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">About me</h1>
        </section>
        <section id="technical-skills" className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Technical Skills</h1>
        </section>
        <section id="professional-experiences" className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Professional Experiences</h1>
        </section>
        <section id="certifications" className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Certifications</h1>
        </section>
        <section id="contact" className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Contact</h1>
        </section>
      </main>
    </div>
  )
}

export default Header;
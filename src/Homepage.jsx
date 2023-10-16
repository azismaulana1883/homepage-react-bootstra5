import Navbar from './Homepage/Headers/Navbar'
import Hero_content from './Content/Hero/Hero_content'
import Subs from './Content/Subscribe/News'
import About from './Content/About/About'
import Footer from './Homepage/Headers/Footer'

function Homepage ()
{
    return (
        <>
            <section id='Navbar'>
                <Navbar/>
            </section>
            <section id='Hero'>
                <Hero_content/>
            </section>
            <section id='About'>
                <About/>
            </section>
            <section id='subscribe'>
                <Subs/>
            </section>
            <section id='footer'>
                <Footer/>
            </section>
        </>
    )
}

export default Homepage
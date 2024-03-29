"use client"
import { motion } from 'framer-motion';
import Accordion from '../app/components/Accordion';
import Header  from '../app/components/Header';
import Footer from '../app/components/Footer';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-parallax';
const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

export default function Home() {

  const { ref: refAbout, inView: inViewAbout } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: refTeam, inView: inViewTeam } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: refServices, inView: inViewServices } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: refWork, inView: inViewWork } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });



 


  const image1 = "/images/frest2.png";
  return (
    <>
      <Header/>
      <main id="my-root" className="flex flex-col min-h-screen bg-white items-center justify-start pt-28 md:pt-20 p-4 sm:p-6 md:p-8 lg:p-12 lg:py-0 xl:p-28 bg-transparent text-black">

        <Parallax bgImage={image1} strength={500}>
          <div className="flex flex-col hero md:flex-row justify-center items-center text-4xl md:text-8xl font-extrabold my-0 h-screen bg-white text-black mt-8 md:mt-0"
            style={{
              backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/images/frest2.png')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed',
              height: '120vh',
              width: '100vw',
              marginTop: '-200px',
            }}
          >
            <motion.span className="md:pr-4 text-5xl sm:text-6xl md:text-8xl text-black"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Anything.
            </motion.span>
            <motion.span className="text-5xl sm:text-6xl md:text-8xl text-black"
              style={{ fontFamily: "'Poppins', sans-serif" }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              But Ordinary
            </motion.span>
          </div>
        </Parallax>
        <div ref={refAbout} className="z-10 pt-12 w-full max-w-5xl items-center justify-center font-mono text-sm">
          <motion.div className="about mb-8"
            initial="hidden"
            animate={inViewAbout ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl mb-4">About</h2>
            <p>Our digital agency excels in web development, SEO, API integrations, marketing, AI, and marketing strategy. We create stunning websites, optimize them for search engines, and seamlessly integrate different software systems. Our marketing services leverage AI to analyze data and devise effective strategies. We're dedicated to delivering tangible results for Australian businesses in the digital realm.</p>
          </motion.div>

          <div ref={refTeam}>
            <motion.div className="team mb-8"
              initial="hidden"
              animate={inViewTeam ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ delay: 1 }}
            >
              <h2 className="text-2xl mb-4">Team</h2>
              <p>We are comprising of both local and international talent. Our agency is proud to have a group of professionals with diverse expertise and backgrounds. Many of our team members bring valuable experience from agency backgrounds in Perth, Western Australia.</p>
            </motion.div>
          </div>

          <div ref={refServices}>
            <motion.div className="services mb-8"
              initial="hidden"
              animate={inViewServices ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ delay: 1.5 }}
            >
              <h2 className="text-2xl mb-4">Our Services</h2>
              <Accordion question="Web Support & Hosting" answer="We provide excellent web support and hosting services." />
              <Accordion question="SEO & PPC" answer="Our SEO and PPC services are designed to help you reach your target audience effectively." />
              <Accordion question="Automations & AI" answer="We implement cutting-edge automations and AI to boost the efficiency and effectiveness of your business processes." />
              <Accordion question="Web Development & API Integrations" answer="Our team of experts offer top-tier web development and API integration services." />
            </motion.div>
          </div>

          <div ref={refWork}>
            <motion.div className="work mb-8"
              initial="hidden"
              animate={inViewWork ? 'visible' : 'hidden'}
              variants={variants}
              transition={{ delay: 2 }}
            >
              <h2 className="text-2xl mb-4">Our Work</h2>
              <Accordion question="JLC Associates" answer="We rebuilt their website giving them a clean modern design. Check out the website at <a href='http://jlcassociates.com.au' target='_blank' rel='noopener noreferrer'>jlcassociates.com.au</a>." />
              <Accordion question="The Barefoot Disciple" answer="Details of the work we've done for The Barefoot Disciple." />
              <Accordion question="Instant Fun" answer="We rebuilt their website in Shopify, offering a modern ecommerce experience." />
              <Accordion question="BML Ventures" answer="We built BML Ventures a Gatsby website that's fast, clean, and modern. Visit <a href='http://bmlventures.com.au' target='_blank' rel='noopener noreferrer'>bmlventures.com.au</a> to see it." />
              <Accordion question="Aust-BioSearch" answer="We revamped Aust-BioSearch's website search and modernised the homepage." />
              <Accordion question="Wanneroo Basketball Association" answer="Details of the work we've done for Wanneroo Basketball Association." />
            </motion.div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

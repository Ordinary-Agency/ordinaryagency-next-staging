import Head from 'next/head';
import Image from 'next/image'
import fs from 'fs'
import path from 'path'
import { motion } from 'framer-motion';
import Accordion from '../app/components/Accordion';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-parallax';
const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};


// "aggregateRating": {
//   "@type": "AggregateRating",
//   "ratingValue": "Your Agency Rating",
//   "reviewCount": "Number of Reviews"
// },
// "review": [
//   {
//     "@type": "Review",
//     "author": {
//       "@type": "Person",
//       "name": "Reviewer's Name"
//     },
//     "datePublished": "Review Date",
//     "description": "Review Description",
//     "reviewRating": {
//       "@type": "Rating",
//       "bestRating": "5",
//       "worstRating": "1",
//       "ratingValue": "Rating Given By Reviewer"
//     }
//   }
//   // ... Add more reviews as needed
// ],

export default function Home({ data }) {
  console.log(data)
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

  const jsonSchema = {
    "@context": "http://schema.org",
    "@type": "ProfessionalService",
    "name": "Ordinary Agency",
    "image": "https://ordinaryagency.com.au/images/oa-brand-larger.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "236 Railway Parade",
      "addressLocality": "Perth",
      "addressRegion": "WA",
      "postalCode": "6005",
      "addressCountry": "Australia"
    },
    "description": "Offering online design & marketing services to businesses in Perth and wider Australia",
    "url": "https://ordinaryagency.com.au",
    "telephone": "+610899308081",
    "email": "hello@ordinaryagency.com.au",
    "areaServed": [
      {
        "@type": "City",
        "name": "Perth"
      },
      {
        "@type": "State",
        "name": "Western Australia"
      },
      {
        "@type": "Country",
        "name": "Australia"
      },
    ],
    "foundingDate": "22-09-11",
    "employee": [
      {
        "@type": "Person",
        "name": "Employee Name",
        "jobTitle": "Employee Job Title",
        "worksFor": "Your Agency Name"
      }
    ],
    "makesOffer": (data) =>
      data.cards.map(card => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": card.title,
          "description": card.description
        },
        "logo": `https://ordinaryagency.com.au${card.serviceImg}`,
        "areaServed": [
          {
            "@type": "City",
            "name": "Perth"
          },
          {
            "@type": "State",
            "name": "Western Australia"
          },
          {
            "@type": "Country",
            "name": "Australia"
          },
        ],
      })),
    "sameAs": [
      "https://www.instagram.com/ordinaryagency/",
      "https://au.linkedin.com/company/ordinaryagencyseo",
    ]
  }

  const image1 = "/images/frest2.png";
  const ServiceCards = () =>
    <div className='cards-container flex flex-row flex-wrap justify-center'>
      {data.cards.map(card =>
        <div className='w-full md:w-[40%] flex flex-row mt-24'>
          <Image
            src={card.serviceImg}
            className='h-[100%] min-w-1/3 px-4 py-2 fill-black'
            width={100}
            height={100}
          />
          <div className='card-text h-full w-2/3 flex flex-col justify-start'>
            <h3>{card.title}</h3>
            <p className='text-md'>{card.description}</p>
          </div>
        </div>

      )}
    </div>;

  return (
    <>
      <Head>
        <title>Ordinary Agency</title>
        <meta name="description" content="Web development & marketing agency serving clients in Perth and interstate." />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonSchema) }} />
      </Head>
      {/* pt-28 md:pt-20 p-4 sm:p-6 md:p-8 lg:p-12 lg:py-0 xl:p-28*/}
      <main id="home" className="flex flex-col min-h-screen bg-white items-center justify-start relative top-0 bg-transparent text-black">
        {/* <Parallax bgImage={image1} strength={500}> */}
        <div className="flex flex-col hero  font-extrabold my-0 h-screen bg-white text-black pt-28 md:pt-20 p-4 sm:p-6 md:p-8 lg:p-12 lg:py-0 xl:p-28"
          style={{
            backgroundImage: "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('/images/frest2.png')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            height: '120vh',
            width: '100vw',
          }}
        >
          <h1 className='text-3xl md:text-7xl text-center max-h-[4rem] my-auto text-black'>
            <motion.span
              style={{
                fontFamily: "'Poppins', sans-serif",
                paddingRight: '5px',
              }}
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Anything but
            </motion.span>
            <motion.span
              style={{ fontFamily: "'Poppins', sans-serif" }}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Ordinary
            </motion.span>
          </h1>

        </div>
        {/* </Parallax> */}
        <div ref={refAbout} className="z-10 pt-12 w-full max-w-5xl items-center justify-center font-mono text-sm">
          <ServiceCards />
          <motion.div className="about mb-8"
            initial="hidden"
            animate={inViewAbout ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl mb-4"> About </h2>
            <p>
              Our digital agency excels in web development, SEO, API integrations, marketing, AI, and marketing strategy.
              We create stunning websites, optimize them for search engines, and seamlessly integrate different software systems.
              Our marketing services leverage AI to analyze data and devise effective strategies. We're dedicated to delivering tangible results for Australian businesses in the digital realm.
            </p>
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
      </main>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'src', 'data', 'index', 'serviceCards.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(jsonData);
  return {
    props: {
      data
    }
  };
}


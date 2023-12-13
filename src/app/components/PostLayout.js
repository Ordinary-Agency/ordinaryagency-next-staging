import Head from 'next/head';
function PostLayout({ 
    children,
    title,
    description, 
    slug,  
    isoDate, 
    author,
    imgPath 
    }) {
    const jsonLdSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": {title},
        "url": "https://ordinaryagency.com.au/" + slug,
        "image": [
          "https://ordinaryagency.com.au" + imgPath,
        ],
        "datePublished": isoDate + "T10:00:00.000",
        "dateModified": isoDate + "T10:00:00.000",
        "author": {
          "@type": "Person",
          "name": {author},
          "url": "https://ordinaryagency.com.au",
        },
        "publisher": {
          "@type": "Organization",
          "name": "Ordinary Agency",
          "url": "https://ordinaryagency.com.au",
          "sameAs": [
            "https://www.instagram.com/ordinaryagency/",
            "https://au.linkedin.com/company/ordinaryagencyseo",
          ],
          "logo": "https://example.com/logo.svg"
        }
      }
    
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }} />
      </Head>
      <main className='py-12'>{children}</main>
    </>
  );
}

export default PostLayout;

import Banner from '@/components/Banner'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Regrev Technology</title>
        <meta name="description" content="The best cloud solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href='/favicon.png' />
        
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap" />
        
        <link rel="preload" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        <link rel="preload" as="script" href="https://unpkg.com/aos@next/dist/aos.js" />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>
    	    AOS.init();
        </script>
      </Head>
      <Banner />
     </div>
  )
}

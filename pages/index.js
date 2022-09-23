import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" type="image/png" sizes="32x32" href="/images/qr-code/favicon-32x32.png" />
        <title>Frontend Mentor | Tailwind Home</title>
      </Head>
      <body class="w-screen h-screen">
        <main class="flex h-screen">
          <div class="flex flex-col m-auto text-center">
            <h3 class="text-slate-900 text-base font-medium">Design Challenges:</h3>
            <div class="flex flex-col underline text-blue-600 hover:text-blue-800 mt-5 text-sm">
              <Link href="/qr-code">
                qr-code
              </Link>
            </div>
          </div>
        </main>
      </body>
    </div>
  )
}

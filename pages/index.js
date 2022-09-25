import Image from 'next/image'
import Link from 'next/link'
import PageHead from '../components/layout/PageHead'

export default function Home() {
  return (
    <div>
      <PageHead title={'FM | Tailwind Home'}/>
      <div class="w-screen h-screen">
        <main class="flex h-screen">
          <div class="flex flex-col m-auto text-center">
            <h3 class="text-slate-900 text-base font-medium">Design Challenges:</h3>
            <div class="flex flex-col underline text-blue-600 hover:text-blue-800 mt-5 text-sm">
              <Link href="/qr-code">
                qr-code
              </Link>
              <Link href="/3-column">
                3-columns
              </Link>
              <Link href="/faq-accordian">
                faq-accordian
              </Link>
              <Link href="/interactive-rating-component">
                interactive-rating-component
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

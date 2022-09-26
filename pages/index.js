import Link from 'next/link'
import PageHead from '../components/layout/PageHead'

const pages = [ 'qr-code', '3-column', 'faq-accordian', 'interactive-rating-component', 'nft-preview-card']

export default function Home() {
  return (
    <div>
      <PageHead title={'FM | Tailwind Home'}/>
      <div class="w-screen h-screen">
        <main class="flex h-screen">
          <div class="flex flex-col m-auto text-center">
            <h3 class="text-slate-900 text-base font-medium">Design Challenges:</h3>
            <div class="flex flex-col underline text-blue-600 hover:text-blue-800 mt-5 text-sm">
              {
                pages.map(page => {
                  return <Link key={page} href={`/${page}`}>{page}</Link>
                })
              } 
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

import Image from "next/future/image";
import PageHead from "../../components/layout/PageHead";

const css = { width: '100%', height: 'auto' }

export default function NFTPreview() {
  return (
    <div class="grid w-full min-h-screen font-outfit text-white bg-very-dark-blue-main">
      <PageHead title='FM | NFT Preview' />
      <main class="flex h-screen">
        <div class="grid flex-col gap-2 justify-center m-auto w-[90%] max-w-[20rem] rounded-2xl bg-very-dark-blue-card p-6">
          <div class="group grid">
            <div class="col-start-1 col-end-2 row-start-1 row-end-2 rounded-lg overflow-hidden">
              <Image width="300" height="300" src="/images/nft-preview/image-equilibrium.jpg" alt="equilibrium" />
            </div>
            <div class="invisible group-hover:visible grid col-start-1 col-end-2 row-start-1 row-end-2 rounded-lg overflow-hidden justify-center items-center bg-nft-cyan bg-opacity-50 cursor-pointer">
              <Image width="48" height="48" src="/images/nft-preview/icon-view.svg" alt="viewing eye"/>
            </div>
          </div>
          <h1 class="font-bold text-[21.5px] mt-3 hover:text-nft-cyan cursor-pointer">Equilibrium #3429</h1>  
          <p class="font-[300] text-light-gray">Our Equilibrium collection promotes balance and calm.</p>
          <div class="flex justify-between border-b border-very-dark-blue-line pb-[10px] pt-[5px]">
            <div class="flex gap-2 items-center">
              <Image width='11' height='18' objectFit='contain' src="/images/nft-preview/icon-ethereum.svg" alt="ETH"/>
              <h2 class="font-bold text-nft-cyan">0.041 ETH</h2>
            </div>
            <div class="flex gap-2 items-center">
              <Image width="17" height="17" objectFit='contain' src="/images/nft-preview/icon-clock.svg" alt="clock"/>
              <p class="font-[300] text-light-gray">3 days left</p>
            </div>
          </div>
          <div class="flex gap-2 items-center mt-2">
            <div class="rounded-full border-[1px] border-white h-8 w-8">
              <Image width={32} height={32} objectFit='contain' src="/images/nft-preview/image-avatar.png" alt="creator of equilibrium"/>
            </div>
            <p class="font-[300] text-light-gray">Creation of <span class="font-[400] text-white hover:text-nft-cyan cursor-pointer">Jules Wyvern</span></p>
          </div>
        </div>
      </main>
    </div>
  )
}
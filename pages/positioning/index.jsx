import PageHead from "../../components/layout/PageHead";

export default function Positioning() {
  return (
    <div>
      <PageHead title="Lern Position" />
      <main class="grid w-full min-h-screen place-items-center align-middle">
        <section class="grid grid-cols-2 grid-rows-2 m-auto text-center">
          <div class="border-4 border-indigo-400 col-start-1 col-end-2 row-start-1 row-end-2">1</div>
          <div class="grid justify-center border-4 border-indigo-500 col-start-1 col-end-2 row-start-1 row-end-2">
            <div class="col-start-1 col-end-2 row-start-1 row-end-2" >2</div>
            <div class="col-start-1 col-end-2 row-start-1 row-end-2">456</div>
            <div class="col-start-1 col-end-2 row-start-1 row-end-2">
              <img class="lg:hidden" src="/images/faq-accordian/bg-pattern-mobile.svg" alt="box shadow" />
              <img class="hidden lg:block" src="/images/faq-accordian/bg-pattern-desktop.svg" alt="box shadow" />
            </div>
            <div class="col-start-1 col-end-2 row-start-1 row-end-2">
              <img class="lg:hidden translate-y-[-6.8rem] " src="/images/faq-accordian/illustration-woman-online-mobile.svg"
                alt="illustration of a woman standing in front of a screen" />
              <img class="hidden lg:block" src="/images/faq-accordian/illustration-woman-online-desktop.svg"
                alt="illustration of a woman standing in front of a screen" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
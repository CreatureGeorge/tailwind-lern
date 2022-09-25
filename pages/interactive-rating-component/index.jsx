import Image from "next/image";
import { useState } from "react";
import PageHead from "../../components/layout/PageHead";

const ratings = [
  {
    id: 1
  }, {
    id: 2
  }, {
    id: 3
  }, {
    id: 4
  }, {
    id: 5
  }
]


export default function InteractiveRatingComponent() {
  const [page, pageUpdate] = useState(1)
  const [activeSelection, setActiveSelection] = useState(0)

  const changePage = (pageNumber) => {
    pageUpdate(pageNumber)
  }

  return (
    <div class="grid w-full min-h-screen font-overpass text-white bg-very-dark-blue">
      <PageHead title="FM | Interactive Rating Component" />
      <main class="flex h-screen justify-start">
        <div class="flex m-auto w-[90%] max-w-[24rem] min-h-[400px] rounded-2xl bg-dark-blue p-6">
          {
            (page == 1) ? (
              <div id="selectionScreen" class="flex flex-col text-left justify-items-start">
                <div class="flex rounded-full bg-soft-dark-blue p-3 mr-auto">
                  <Image src="/images/interactive-rating-component/icon-star.svg" width={12} height={12} />
                </div>
                <div class="my-[30px]">
                  <h1 class="mb-4 text-[1.6rem] font-bold">How did we do?</h1>
                  <p class="text-med-gray text-[15px]">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                </div>
                <div class="flex flex-row justify-between mb-6">
                  {
                    ratings.map(rating => {
                      return <InteractiveSelectItem key={rating.id} id={rating.id} text={rating.id} activeSelection={activeSelection} setActiveSelection={setActiveSelection} />
                    })
                  }
                </div>
                <div>
                  <button class="rounded-full bg-orange w-full py-4 uppercase font-bold tracking-[.15em] enabled:hover:bg-white enabled:hover:text-orange transition-colors duration-500 disabled:bg-slate-400 disabled:text-med-gray" disabled={activeSelection == 0} onClick={() => changePage(2)}>submit</button>
                </div>
              </div>
            ) : (
              <div id="thankYouScreen" class="text-center flex flex-col justify-center">
                <div class="mb-4">
                  <Image src="/images/interactive-rating-component/illustration-thank-you.svg" width={162} height={108}/>
                </div>
                <button onClick={() => changePage(1)} class=" mx-auto rounded-full text-[15px] bg-soft-dark-blue px-4 pt-1 hover:bg-white text-orange transition-colors duration-500">You selected {activeSelection} out of 5</button>
                <div>
                  <h1 class="mb-4 mt-6 text-[1.6rem] font-bold">Thank you!</h1>
                  <p class="text-med-gray text-[15px]">We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
                </div>
              </div>
            )
          }
        </div>
      </main>
    </div>
  )
}

function InteractiveSelectItem({ id, text, activeSelection, setActiveSelection }) {

  const handleSelection = () => {
    if (activeSelection == id)
      setActiveSelection(0)
    else
      setActiveSelection(id)
  }

  return (
    <>
      {
        activeSelection !== id ? (
          <button onClick={() => handleSelection()} class="p-2 h-[50px] w-[50px] text-med-gray rounded-full bg-soft-dark-blue hover:bg-med-gray hover:text-white transition-colors duration-500">
            {text}
          </button>
        ) : (
          <button onClick={() => handleSelection()} class="p-2 h-[50px] w-[50px] text-white rounded-full bg-orange hover:bg-soft-orange">
            {text}
          </button>
        )
      }
    </>
  )
}
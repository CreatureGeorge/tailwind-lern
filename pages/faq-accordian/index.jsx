import Image from "next/image";
import { useState } from "react";
import PageHead from "../../components/layout/PageHead";

const faq = [
  {
    index: 1,
    summary: "How many team members can I invite?",
    description: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
  },
  {
    index: 2,
    summary: "What is the maximum file upload size?",
    description: "No more than 2GB. All files in your account must fit your allotted storage space."
  },
  {
    index: 3,
    summary: "How do I reset my password?",
    description: "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you."
  },
  {
    index: 4,
    summary: "Can I cancel my subscription?",
    description: "Yes! Send us a message and we’ll process your request no questions asked."
  },
  {
    index: 5,
    summary: "Do you provide additional support?",
    description: "Chat and email support is available 24/7. Phone lines are open during normal business hours."
  }
]



export default function FAQAccordian() {
  const [currentFaq, setCurrentFaq] = useState(false)

  return (
    <div class="grid w-full min-h-screen place-items-center bg-gradient-to-b from-[#af67e9] to-[#6565e7]">
      <PageHead title="FM | FAQ Accordian" />
      <section class="grid lg:grid-cols-2 bg-white rounded-[2.3rem] w-[90%] z-0">
        <section class="grid ">
          <div class="grid">
            <div class="grid place-items-center m lg:align-middle col-start-1 col-end-2 row-start-1 row-end-2">
              <img class="lg:hidden w-[14.5rem] translate-y-[-6.7rem]" src="/images/faq-accordian/illustration-woman-online-mobile.svg"
                alt="illustration of a woman standing in front of a screen" />
              <img class="hidden lg:block translate-x-[-3.5rem] translate-y-[20%] z-10" src="/images/faq-accordian/illustration-woman-online-desktop.svg"
                alt="illustration of a woman standing in front of a screen" />
            </div>
            <div class="grid place-items-center col-start-1 col-end-2 row-start-1 row-end-2 lg:absolute overflow-hidden">
              <img class="lg:hidden translate-y-[-2.5rem]" src="/images/faq-accordian/bg-pattern-mobile.svg" alt="box shadow" />
              <img class="hidden lg:block top-1/2 translate-x-[-35rem] translate-y-[-32%] z-0" src="/images/faq-accordian/bg-pattern-desktop.svg" alt="box shadow" />
            </div>  
          </div>
          <img class="hidden lg:block translate-x-[-5.5rem] translate-y-[-9.5rem] z-20" src="/images/faq-accordian/illustration-box-desktop.svg" atl="box" />
        </section>
        <section class="flex flex-col gap-[2.8rem] px-4 pb-4 w-full z-10 m-auto font-kumbh-sans lg:w-[100%]">
          <h2 class="font-bold text-[2.2rem] text-center lg:text-left">FAQ</h2>
          <ul>
            {
              faq.map(item => {
                return <AccordianItem key={item.index} currentFaq={currentFaq} setCurrentFaq={setCurrentFaq} index={item.index} summary={item.summary} description={item.description}/>
              })
            }
          </ul>
        </section>
      </section>
    </div>
  )
}

function AccordianItem( {currentFaq, setCurrentFaq, index, summary, description}){

  function handleClick(){
    if (currentFaq == index)
      setCurrentFaq(-1)
    else 
      setCurrentFaq(index)
  }
  function descriptionDisplay() {
    if (currentFaq == index) {
      return (
        <p >{description}</p> 
      )
    } 
  }
  return (
    <li class="border-b-[1px] pb-[1rem] mb-[1rem]">
      <section onClick={handleClick} class="flex justify-between items-center hover:text-soft-red cursor-pointer mb-2">
        {
          currentFaq !== index ? (<p class="">{summary}</p>) : (<p class="font-bold">{summary}</p>)
        }
        {
          currentFaq !== index ? (<img src="/images/faq-accordian/icon-arrow-down.svg" alt="arrow" />) : (<img class="rotate-180" src="/images/faq-accordian/icon-arrow-down.svg" alt="arrow" />)
        }
        
        
      </section>
      {descriptionDisplay()}
    </li>
  )
}
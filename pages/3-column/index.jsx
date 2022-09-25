import PageHead from "../../components/layout/PageHead"

export default function ThreeColumn() {
  const cardInfo = [
    {
      image: "/images/3-column/icon-sedans.svg",
      title: "sedans",
      description: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
      bgcolor: "bg-[#e38826]",
      textcolor: "text-[#e38826]"
    },
    {
      image: "/images/3-column/icon-suvs.svg",
      title: "suvs",
      description: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
      bgcolor: "bg-[#006970]",
      textcolor: "text-[#006970]"
    },
    {
      image: "/images/3-column/icon-luxury.svg",
      title: "luxury",
      description: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
      bgcolor: "bg-[#004241]",
      textcolor: "text-[#004241]"
    },
  ]

  return (
    <div>
      <PageHead title={'FM | 3 Column'} />
      <main class="flex w-screen h-screen py-10">
        <div class="flex flex-col md:flex-row m-auto align-middle h-screen">
          {
            cardInfo.map(card => {
              return (
              <div key={card.title} class={`first:rounded-t-lg last:rounded-b-lg w-[300px] md:basis-2/6 md:first:rounded-l-lg md:last:rounded-r-lg md:first:rounded-none md:last:rounded-none ${card.bgcolor} px-11 py-14`}>
                <img alt={card.description} src={card.image}/>
                <div class="mb-20">
                  <div class="font-big-shoulders uppercase text-verylightgray text-[36px] my-7">{card.title}</div>
                  <div class="font-lexend-deca text-transparentwhite text-[15px] ">{card.description}</div>
                </div>
                <button class={`font-lexend-deca ${card.textcolor} bg-white rounded-full border-white border-2 md:hover:bg-transparent md:hover:text-transparentwhite hover:border-transparentwhite px-4 py-2`}>Learn More</button>
              </div>
              )
            })
          }
        </div>
      </main>
    </div>)
}
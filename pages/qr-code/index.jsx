import Head from "next/head";

export default function QRCode() {
  return (
    <html>
      <Head>
        <link rel="shortcut icon" type="image/png" sizes="32x32" href="/images/qr-code/favicon-32x32.png" />
        <title>Frontend Mentor | QR code component</title>
      </Head>
      <body class="bg-lightgray w-screen h-screen">
        <div class="flex h-screen">
          <div class="bg-white flex flex-col m-auto p-4 rounded-2xl w-[310px]">
            <img class="rounded-xl" src="/images/qr-code/image-qr-code.png" />
            <div class='font-outfit text-center p-3'>
              <p class='text-lg text-[20.5px] font-bold text-darkblue leading-tight mt-3 mb-4'>Improve your front-end skills by building projects</p>
              <p class="text-[15px] font-normal text-grayblue leading-tight mb-3">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
          </div>
        </div>
        <div class="attribution p-2">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
          Coded by <a href="#" class=''>Goerge Mueller</a>.
        </div>
      </body>
    </html>)
}
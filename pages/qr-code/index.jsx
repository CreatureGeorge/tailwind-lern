import Head from "next/head";
import PageHead from "../../components/layout/PageHead";

export default function QRCode() {
  return (
    <div>
      <PageHead title="FM | QR code component"/>
      <main class="bg-lightgray w-screen h-screen">
        <div class="flex h-screen">
          <div class="bg-white flex flex-col m-auto p-4 rounded-2xl w-[320px]">
            <img class="rounded-xl" alt="QR Code to Frontend Mentor" src="/images/qr-code/image-qr-code.png" />
            <div class='font-outfit text-center p-3'>
              <p class='text-lg text-[21px] font-bold text-darkblue leading-tight mt-4 mb-4'>Improve your front-end skills by building projects</p>
              <p class="text-[15px] font-normal text-grayblue leading-tight mb-3">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
          </div>
        </div>
      </main>
    </div>
)
}
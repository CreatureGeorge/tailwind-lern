import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const people = [
  {
    name: "George Mueller",
    title: "Dev Boi",
    email: "george@lifenetwork.dev",
    imageUrl: "/img/george.png"
  }, {
    name: "George Mueller",
    title: "Dev Boi",
    email: "george@lifenetwork.dev",
    imageUrl: "/img/george.png"
  }, {
    name: "George Mueller",
    title: "Dev Boi",
    email: "george@lifenetwork.dev",
    imageUrl: "/img/george.png"
  },
]

export default function Home() {
  return (
    <div class="w-screen h-screen">
      <div class="flex h-screen">
        <div class="flex flex-col m-auto text-center">
        <h3 class="text-slate-900 text-base font-medium">Design Challenges:</h3>
        <div class="flex flex-col underline text-blue-600 hover:text-blue-800 mt-5 text-sm">
          <Link  href="/qr-code">
            qr-code
          </Link>
        </div>
        </div>
      </div>
    </div>
  )
}

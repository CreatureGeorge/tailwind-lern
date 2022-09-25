import Link from "next/link";

export default function Header() {
  return (
    <header class="fixed inset-x-0 top-0 flex flex-row justify-between z-10 bg-transparent ml-6">
      <div class="bg-white p-2 rounded-full flex flex-col text-blue-600 hover:text-blue-800 mt-5 text-sm font-outfit">
        <Link href="/">
          HOME
        </Link>
      </div>
    </header>
  )
}
import Head from "next/head";

export default function PageHead({ title }) {
  return (
    <Head>
      <link rel="shortcut icon" type="image/png" sizes="32x32" href="/images/qr-code/favicon-32x32.png" />
      <title>{title}</title>
    </Head>
  )
}
import Head from 'next/head'
import { Header } from '../components/Header'
import { FormMassIndex } from '../components/FormMassIndex'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet" />
      </Head>

      <Header />

      <main className="md:px-12 px-4">
        <FormMassIndex />
      </main>
    </div>
  )
}

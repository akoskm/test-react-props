import { Map } from 'immutable';
import Head from 'next/head'
import Image from 'next/image'
import Profile from '@/components/Profile';

import styles from '@/pages/index.module.css'

export default function Home() {
  const user = Map({
    firstName: "John",
    lastName: "Doe",
    age: 35,
    profileId: "1234-fake-4567-uuid",
    email: "john.doe@example.com",
    phone: "+1-555-555-5555",
    company: "Acme Inc.",
    jobTitle: "Software Engineer",
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing <code>pages/index.js</code>
        </p>

        <Profile user={user} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

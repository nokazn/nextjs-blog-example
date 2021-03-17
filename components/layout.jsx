import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link'
import styles from './layout.module.scss';
import utilStyles from '../styles/utils.module.scss'

export const SITE_TITLE = 'Next.js Sample Website';
const NAME = 'nokazn';

const ogImageUrl = (title) => `https://og-image.vercel.app/${encodeURI(title)}.png?thme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`

const profileOrLink = (home, name) => {
  return home
    ? (<>
      <Image
        priority
        src="/images/profile.jpg"
        className={utilStyles.borderCircle}
        height={144}
        width={144}
        alt={name}
      />
      <h1 className={utilStyles.heading2X1}>{name}</h1>
    </>)
    : (
      <>
        <Link href="/">
          <a>
            <Image
              property
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={108}
              width={108}
              alt={name}
            />
          </a>
        </Link>
        <h2 className={utilStyles.headingLg}>
          <Link href="/">
            <a className={utilStyles.colorInherit}>
              {name}
            </a>
          </Link>
        </h2>
      </>
    );
};

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta property="og:image" content={ogImageUrl(SITE_TITLE)} />
        <meta name="og:title" content={SITE_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {profileOrLink(home, NAME)}
      </header>
      <main>
        {children}
      </main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
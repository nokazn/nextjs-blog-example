import Head from 'next/head'
import Layout, { SITE_TITLE } from '../components/layout'
import utilStyles from '../styles/utils.module.scss';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi, I'm <a href="https://github.com/nokazn" target="_blank">nokazn</a>.</p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}

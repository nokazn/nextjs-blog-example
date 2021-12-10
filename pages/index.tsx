import Head from 'next/head';
import Link from 'next/link';
import classnames from 'classnames';
import Layout, { SITE_TITLE } from '../components/layout';
import Date from '../components/date';
import { getSortedPostData } from '../lib/posts';
import utilStyles from '../styles/utils.module.scss';

export const getStaticProps = async () => {
  const allPostsData = getSortedPostData();
  return {
    props: {
      allPostsData,
    },
    revalidate: 10,
  };
};

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{SITE_TITLE}</title>
      </Head>
      <section>
        <p>
          Hi, I'm{' '}
          <a href='https://github.com/nokazn' target='_blank'>
            nokazn
          </a>
          .
        </p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>

      {allPostsData != null && allPostsData.length > 0 && (
        <section className={classnames(utilStyles.headingMd, utilStyles.padding1px)}>
          <h2 className={classnames(utilStyles.headingLg)}>Blog</h2>
          <ul className={classnames(utilStyles.list)}>
            {allPostsData.map(({ id, title, date }) => (
              <li className={classnames(utilStyles.listItem)} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={classnames(utilStyles.lightText)}>
                  <Date>{date}</Date>
                </small>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Layout>
  );
}

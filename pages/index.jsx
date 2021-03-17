import Head from 'next/head';
import classnames from 'classnames';
import Layout, { SITE_TITLE } from '../components/layout';
import { getSortedPostData } from '../lib/posts';
import utilStyles from '../styles/utils.module.scss';

export const getStaticProps = async () => {
  const allPostsData = getSortedPostData();
  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }) {
  console.log(allPostsData);
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

      {allPostsData && (
        <section className={classnames(utilStyles.headingMd, utilStyles.padding1px)}>
          <h2 className={classnames(utilStyles.headingLg)}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, data }) => (
              <li className={classnames(utilStyles.listItem)} key={id}>
                {data.title}
                <br />
                {id}
                <br />
                {data.date}
                <br />
              </li>
            ))}
          </ul>
        </section>
      )}
    </Layout>
  );
}

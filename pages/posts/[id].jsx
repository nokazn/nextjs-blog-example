import Head from 'next/head';
import classnames from 'classnames';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.scss';

export const getStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
    revalidate: 10,
  };
};

export default function Post({ postData }) {
  if (postData) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={classnames(utilStyles.headingX1)}>{postData.title}</h1>
          <div className={classnames(utilStyles.lightText)}>
            <Date>{postData.date}</Date>
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
      </Layout>
    );
  }
  return <></>;
}

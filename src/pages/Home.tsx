import React, { FC } from 'react';
import { Article, Layout } from '../components';
import { articles } from '../data';
import './Home.css';

const Home: FC = () => {
  const sortedArticles = articles.sort(
    (article1, article2) => Number(article2.createdAt) - Number(article1.createdAt)
  );

  return (
    <Layout title="Articles">

      <Article.List articles={sortedArticles} />

    </Layout>
  );
};

export default Home;

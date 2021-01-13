import React, { FC } from "react";
import { Redirect, RouteComponentProps } from "react-router";
import { Article, Layout } from "../components";
import { articles } from "../data";

type TParams = { id: string };

const SingleArticle: FC<RouteComponentProps<TParams>> = ({ match }) => {
  const id = Number(match.params.id);
  const article = articles.find( article => article.id === id );
  
  if (typeof article === 'undefined') {
    return <Redirect to="/" />;
  }

  return (
    <Layout title="Read Article">

      <Article.Details article={article} />

    </Layout>
  )
}

export default SingleArticle;

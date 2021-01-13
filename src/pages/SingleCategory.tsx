import React, { FC } from "react";
import { Redirect, RouteComponentProps } from "react-router";
import { Category, Layout } from "../components";
import { categories } from "../data";

type TParams = { id: string };

const SingleCategory: FC<RouteComponentProps<TParams>> = ({ match }) => {
  const id = Number(match.params.id);
  const category = categories.find( category => category.id === id );

  if (typeof category === 'undefined') {
    return <Redirect to="/" />;
  }

  return (
    <Layout title="Category">

      <Category.Details category={category} />

    </Layout>
  )
}

export default SingleCategory;

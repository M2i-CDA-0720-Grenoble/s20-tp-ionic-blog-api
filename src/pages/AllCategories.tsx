import React, { FC } from "react";
import { Category, Layout } from "../components";
import { categories } from "../data";

const AllCategories: FC = () => {
  const sortedCategories = categories.sort(
    (category1, category2) => {
      if (category1.name > category2.name) {
        return 1;
      } else if (category1.name < category2.name) {
        return -1;
      }
      return 0;
    }
  );

  return (
    <Layout title="Categories">

      <Category.List categories={sortedCategories} />

    </Layout>
  )
}

export default AllCategories;

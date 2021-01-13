import { IonList } from "@ionic/react";
import React, { FC } from "react";
import { Category } from "../../models";
import CategoryPreview from "./CategoryPreview";

interface CategoryListProps {
  categories: Category[],
}

const CategoryList: FC<CategoryListProps> = ({ categories }) =>
  <IonList>
    {
      categories.map(
        (category, index) => 
          <CategoryPreview
            key={index}
            category={category}
          />
      )
    }
  </IonList>
;

export default CategoryList;

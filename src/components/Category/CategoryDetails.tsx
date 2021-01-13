import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import React, { FC } from "react";
import { Article } from "..";
import { articles } from "../../data";
import { Category } from "../../models";
import MarkupContainer from "../MarkupContainer";

interface CategoryDetailsProps {
  category: Category,
}

const CategoryDetails: FC<CategoryDetailsProps> = ({ category }) => {
  const filteredArticles = articles.filter(
    article => article.category.id === category.id
  );

  return (
    <>
      <IonCard>
        
        <IonCardHeader>
          <IonCardTitle>{category.name}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <MarkupContainer html={category.description} />
        </IonCardContent>

      </IonCard>

      <Article.List articles={filteredArticles} />
    </>
  );
}

export default CategoryDetails;

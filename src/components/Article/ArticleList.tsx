import { IonList } from "@ionic/react";
import React, { FC } from "react";
import { Article } from "../../models";
import ArticlePreview from "./ArticlePreview";

interface ArticleListProps {
  articles: Article[],
}

const ArticleList: FC<ArticleListProps> = ({ articles }) =>
  <IonList>
    {
      articles.map(
        (article, index) =>
          <ArticlePreview
            key={index}
            article={article}
          />
      )
    }
  </IonList>
;

export default ArticleList;

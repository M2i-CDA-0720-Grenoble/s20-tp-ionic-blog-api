import { IonBadge, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from "@ionic/react";
import React, { FC, useContext } from "react";
import { CommentContext } from "../../contexts";
import { Article } from "../../models";
import { Comment } from "../";
import MarkupContainer from "../MarkupContainer";

import './ArticleDetails.css';

interface ArticleDetailsProps {
  article: Article,
}

const ArticleDetails: FC<ArticleDetailsProps> = ({ article }) => {
  const { comments } = useContext(CommentContext);

  const filteredComments = comments.filter(
    comment => comment.article.id === article.id
  );

  return (
    <>
      <IonCard>
        <img src={article.cover} alt={`Cover for article: ${article.title}`} />

        <IonCardHeader>
          <IonBadge color="tertiary">{article.category.name}</IonBadge>
          <IonCardTitle>{article.title}</IonCardTitle>
          <IonCardSubtitle>Published on {article.createdAt.toLocaleString('en-GB')}</IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          <MarkupContainer className="ArticleDetails-content" html={article.content} />
        </IonCardContent>

      </IonCard>

      <Comment.List comments={filteredComments} />

      <Comment.Form article={article} />
    </>
  );
}

export default ArticleDetails;

import { IonTitle, IonList, IonCard, IonCardHeader, IonCardSubtitle, IonCardContent, IonItem } from "@ionic/react";
import React, { FC } from "react";
import { Comment } from '../../models';

interface CommentListProps {
  comments: Comment[],
}

const CommentList: FC<CommentListProps> = ({ comments }) =>
  <>
    {
      comments.length === 0 ? <IonItem>No comments on this post yet.</IonItem> :
      <>
        <IonTitle>Comments</IonTitle>
        <IonList>
          {
            comments.map(
              comment =>
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>{comment.username} says:</IonCardSubtitle>
                  </IonCardHeader>

                  <IonCardContent>
                    {comment.content}
                  </IonCardContent>
                </IonCard>
            )
          }
        </IonList>
      </>
    }
  </>
;

export default CommentList;

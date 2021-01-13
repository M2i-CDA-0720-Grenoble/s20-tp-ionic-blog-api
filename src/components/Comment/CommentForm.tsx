import { IonTitle, IonItem, IonLabel, IonInput, IonTextarea, IonButton } from "@ionic/react";
import React, { FC, useContext, useState } from "react";
import { CommentContext } from "../../contexts";
import { Article, Comment } from "../../models";

interface CommentFormProps {
  article: Article,
}

const CommentForm: FC<CommentFormProps> = ({ article }) => {
  const { addComment } = useContext(CommentContext);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    const newComment: Comment = {
      username,
      email,
      content,
      article,
    };

    addComment(newComment);

    setUsername('');
    setEmail('');
    setContent('');
  }

  return (
    <>
      <IonTitle>Post comment</IonTitle>
      <IonItem>
        <IonLabel position="floating">Username</IonLabel>
        <IonInput 
          value={username} 
          onIonChange={(event) => setUsername( event.detail.value as string )} 
        />
      </IonItem>
      <IonItem>
        <IonLabel position="floating">E-mail address</IonLabel>
        <IonInput 
          value={email} 
          onIonChange={(event) => setEmail( event.detail.value as string )} 
        />
      </IonItem>
      <IonItem>
        <IonTextarea 
          placeholder="Enter your comment here..."
          value={content} 
          onIonChange={(event) => setContent( event.detail.value as string )} 
        />
      </IonItem>
      <IonButton
        expand="block"
        onClick={handleSubmit}
      >
        Post
      </IonButton>
    </>
  );
}

export default CommentForm;

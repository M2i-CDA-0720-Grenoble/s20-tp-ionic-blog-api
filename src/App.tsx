import React, { FC, useState } from 'react';
import { IonApp } from '@ionic/react';
import { Navigation } from './components';
import { Comment } from './models';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { CommentContext } from './contexts';

const App: FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  const addComment = (newComment: Comment) => {
    setComments([
      ...comments,
      newComment
    ])
  }

  const contextValue = {
    comments,
    addComment,
  }
 
  return (
    <CommentContext.Provider value={contextValue}>
      <IonApp>
        <Navigation />
      </IonApp>
    </CommentContext.Provider>
  );
}

export default App;

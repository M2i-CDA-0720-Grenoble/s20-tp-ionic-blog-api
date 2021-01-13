import { IonTabs, IonRouterOutlet, IonTabBar, IonTabButton, IonIcon, IonLabel, IonLoading } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import React, { FC, Suspense } from "react";
import { Route, Redirect } from "react-router";
import { routes } from "../data";

const Navigation: FC = () =>
  <IonReactRouter>

    <IonTabs>
      <IonRouterOutlet>
        <Suspense fallback={<IonLoading
          isOpen
          message={'Please wait...'}
        />}>

          {
            routes.map(
              (route, index) =>
                <Route
                  key={index}
                  path={ route.displayTab ? `/tabs/:tab(${route.name})` : route.uri }
                  component={route.Component}
                  exact={true}
                />
            )
          }
          <Route exact path="/" render={() => <Redirect to={routes[0].uri} />} />

        </Suspense>
      </IonRouterOutlet>

      <IonTabBar slot="bottom">

        {
          routes.filter( route => route.displayTab ).map(
            (route, index) =>
              <IonTabButton key={index} tab={route.name} href={route.uri}>
                <IonIcon icon={route.icon} />
                <IonLabel>{route.text}</IonLabel>
              </IonTabButton>
          )
        }

      </IonTabBar>
    </IonTabs>

  </IonReactRouter>
;

export default Navigation;

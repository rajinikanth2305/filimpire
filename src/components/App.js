/* eslint-disable no-console */
// eslint-disable-next-line
import React from 'react';
import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Actors, MovieInformation, Movies, NavBar, Profile } from "./"
import useStyles from "./styles"
const App = () => {
  const classes=useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
      <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/movie/:id">
            <MovieInformation />
          </Route>
          <Route exact path="/actors/:id">
            <Actors />
          </Route>
          <Route exact path="/">
            <h1>Home</h1>
          </Route>
          <Route exact path="/profile/:id">
            <Profile />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
        </Switch>
      </main>
    </div>
  )
}

export default App;
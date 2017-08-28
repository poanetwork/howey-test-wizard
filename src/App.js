import React from 'react';
import { Header, Footer, Intro, Questions, Results } from './components/index';
import { Route } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <Header/>
      <Route exact path="/" component={Intro}/>
      <Route path="/questions/:questionId" component={Questions}/>
      <Route path="/results" component={Results}/>
      <Footer/>
    </div>
  );
};

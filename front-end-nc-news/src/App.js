import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import ArticlesList from './Components/ArticlesList';
import Header from './Components/Header';
import Topics from './Components/Topics';
import SingleArticle from './Components/SingleArticle';
import Footer from './Components/Footer';
import HandleError from './Components/HandleError';
import ProjectsLink from './Components/ProjectsLink';

function App() {
  return (
    <div className="App">
      <Header />
      <Topics />
      <Router primary={false}>
        <ArticlesList path="/" />
        <ArticlesList path="/topic/:topic" />
        <SingleArticle path="/articles/:article_id" />
        <HandleError path="/*" />
        <ProjectsLink path="/projects" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;

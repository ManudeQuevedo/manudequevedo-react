import './App.css'
import "normalize.css"
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Provider } from "react-redux"
import Store from "./store"
import Layout from './components/layout'
import Home from "./pages/home"
import About from './pages/about'
import Projects from './pages/projects'

function App() {
  return (
    <Provider store={Store}>
      <Router basename="/">
        <Switch>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
          </Layout>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App

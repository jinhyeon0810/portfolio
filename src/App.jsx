import { useRef } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import GlobalStyles from "./GlobalStyles";

function App() {
  const element = useRef();
  const resumeElement = useRef();
  const projectElement = useRef();
  const onMoveToElement = () => {
    element.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onMoveToResumeElement = () => {
    resumeElement.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const onMoveToProjectElement = () => {
    projectElement.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <GlobalStyles />
      <Header onMoveToElement={onMoveToElement} onMoveToResumeElement={onMoveToResumeElement} onMoveToProjectElement={onMoveToProjectElement} />
      <Intro element={element} onMoveToElement={onMoveToElement} />
      <AboutMe />
      <Skills resumeElement={resumeElement} />
      <Projects projectElement={projectElement} />
    </>
  );
}

export default App;

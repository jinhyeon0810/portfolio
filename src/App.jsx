import { useRef } from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Study from "./components/Study";
import GlobalStyles from "./GlobalStyles";

function App() {
  const element = useRef();
  const resumeElement = useRef();
  const projectElement = useRef();
  const studyElement = useRef();
  const onMoveToElement = () => {
    element.current.scrollIntoView({ behavior: "smooth" });
  };

  const onMoveToResumeElement = () => {
    resumeElement.current.scrollIntoView({ behavior: "smooth" });
  };
  const onMoveToProjectElement = () => {
    projectElement.current.scrollIntoView({ behavior: "smooth" });
  };
  const onMoveToStudyElement = () => {
    studyElement.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <GlobalStyles />
      <Header
        onMoveToElement={onMoveToElement}
        onMoveToResumeElement={onMoveToResumeElement}
        onMoveToProjectElement={onMoveToProjectElement}
        onMoveToStudyElement={onMoveToStudyElement}
      />
      <Intro element={element} onMoveToElement={onMoveToElement} />
      <AboutMe />
      <Skills resumeElement={resumeElement} />
      <Projects projectElement={projectElement} />
      <Study studyElement={studyElement} />
    </>
  );
}

export default App;

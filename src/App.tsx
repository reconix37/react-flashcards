import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "./App.css";
import React from "react";

function App() {
  const flashCards = [
    { question: "What is React?", answer: "A JavaScript library for building user interfaces." },
    { question: "What is TypeScript?", answer: "A typed superset of JavaScript that compiles to plain JavaScript." },
    { question: "What is Vite?", answer: "A build tool that aims to provide a faster and leaner development experience for modern web projects." },
    { question: "What is Radix UI?", answer: "A library of unstyled, accessible components for building high-quality design systems and web apps." },
    { question: "What is Tailwind CSS?", answer: "A utility-first CSS framework for rapidly building custom user interfaces." },
    { question: "What is a Zivotny cyclus vyroby?", answer: "Bla bla bla bla ble ble ble" },
    { question: "What is a Progress Bar?", answer: "A graphical element used to visualize the progression of an operation." },
    { question: "What is a Button Component?", answer: "A reusable UI element that users can click to perform an action." },
    { question: "What is State in React?", answer: "An object that determines how that component renders and behaves." },
    { question: "What is a Component in React?", answer: "A reusable piece of UI that can be nested, managed, and handled independently." },
  ];

  
  const [currentCardIndex, setCurrentCardIndex] = React.useState(0);
  const [showAnswerButton, setShowAnswerButton] = React.useState(false);
  
  const randomCard = () => {
    setShowAnswerButton(false);

    setCurrentCardIndex(() => {
      let newIndex = Math.floor(Math.random() * flashCards.length);
      do {
        newIndex = Math.floor(Math.random() * flashCards.length);
      } while (newIndex === currentCardIndex);
      return newIndex;
    });
  }

  const nextCard = () => {
    setShowAnswerButton(false);
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashCards.length);
  }

  const previousCard = () => {
    setShowAnswerButton(false);
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + flashCards.length) % flashCards.length);
  }

  return (
    <div className="app">
      <h1 className="text-left text-2xl font-bold">Flash Cards</h1>
      <div className="progress-bar w-full">
        <Progress value={currentCardIndex+1} total={flashCards.length} />
      </div>
      <div className="exercise-window">
        {!showAnswerButton && <p className="mt-4 text-gray-700 ">
          {flashCards[currentCardIndex].question}
        </p>}
        {showAnswerButton && <p className="mt-4 text-gray-700 ">
          {flashCards[currentCardIndex].answer}
        </p>}
        <div className="button-group">
          <Button variant="outline" onClick={previousCard}> <ArrowLeft className="w-4 h-4 mr-2" />Previous</Button>
          <Button variant="outline" onClick={() => setShowAnswerButton(prev => !prev)}> Show Answer</Button>
          <Button variant="outline" onClick={randomCard}>Random</Button>
          <Button variant="outline" onClick={nextCard}>Next <ArrowRight className="w-4 h-4 ml-2" /></Button>
        </div>
      </div>
    </div>
  );
}

export default App;


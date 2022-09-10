import Jokes from "./Jokes";

export default function App() {
  return (
    <div className="containerBody">
      <h1 className="header">Ways Jokes</h1>
        <Jokes 
          setup="I got my daughter a fridge for her birthday."
          joke="I can't wait to see her face light up when she opens it."
        />
        <Jokes 
          setup="How did the hacker escape the police?"
          joke="He just ransomware!"
        />
        <Jokes 
          setup="Why don't pirates travel on mountain roads?"
          joke="Scurvy"
        />
        <Jokes 
          setup="What's the best thing about Switzerland?"
          joke="I don't know, but the flag is a big plus!"
        />
    </div>
  );
}


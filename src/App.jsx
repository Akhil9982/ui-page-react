import Section1 from "./components/Section1/Section1";

const App = () => {
  let users = [
    {
      img: "https://plus.unsplash.com/premium_photo-1731355866971-42046925bb95?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "I am beautiful, I have a good smile and i like to eat good food.",
      color: "Royalblue",
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1732127042500-a22e46bb5e53?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro: "I love to explore new places,cusine and play sports.",
      color: "lightblue",
      tag: "Underserved",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1672691612717-954cdfaaa8c5?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "I help my co-workers and i love to play basket ball and love food.",
      color: "lightgreen",
      tag: "Underbanked",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661692300007-499e5f01e863?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "I am an adveturer and i love to travel,explore. I have a passion for codding and cooking.",
      color: "blue",
      tag: "Undervalued",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661578512200-7d7e5b4fc3c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "I am an adveturer and i love to travel,explore. I have a passion for codding and cooking.",
      color: "lightgreen",
      tag: "Underpaid",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
    </div>
  );
};

export default App;

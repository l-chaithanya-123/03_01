import "./App.css";

function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}
const items=[
  "macroni and cheese",
  "salmon and potatoes",
  "tofu and vegetables",
  "guhuihioj"
];
function Main({dishes}){
  return(
    <ul>
      {dishes.map((dish, i) => (
        <li key={i} style={{listStyleType:"none"}}>{dish}</li>
        ))}
    </ul>
  )
}

function App() {
  return (
    <div>
      <Header name="Alex" year={new Date().getFullYear()} />
      <Main dishes={items}/>
      <h2> We serve the most delicious food around</h2>
    </div>
  );
}

export default App;

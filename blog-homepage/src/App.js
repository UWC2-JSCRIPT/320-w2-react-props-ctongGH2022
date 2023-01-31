import './App.css';
import Article from './Article';
import yourArticles from './your-articles.json';
import missedArticles from './missed-articles.json';

function App() {
// Section: 'For you'
const yArticles = yourArticles.map((article,index) => {
  return(
    <div key={index}>
      <Article
        article={article}
        />
    </div>
  )
})

// Section: 'In case you missed it'
const mArticles = missedArticles.map((article,index) => {
  return(
    <div key={index}>
      <Article
        article={article}
        />
    </div>
  )
})

// Lists of articles
  return (
    <div className="App">
      <div><h3>For you</h3></div>
      <div className="ForYou">{yArticles}</div> 
      <div><h3>In case you missed it</h3></div>
      <div className="IfYouMissed">{mArticles}</div>   
    </div>
  );
}

export default App;
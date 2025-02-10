import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function Nav(props) {
  const lis = []
    for (let i=0; i<props.topics.length; i++) {
      let t = props.topics[i];
      lis.push(<li key={t.id}><a href={'/read/' + t.id} onclick={event=>{
        event.preventDefault();
        props.onChangeMode(event.target.id);
      }}>{t.title}</a></li>)
    }
  return(
    <ol>
      {lis}
    </ol>
  );
}

function App() {

  const topics = [
    {id:1, title:'html', body: 'html is ...'},
    {id:2, title:'css', body: 'css is ...'},
    {id:3, title:'js', body: 'js is ...'},
  ]

  return (
    <>
      <Header title="header" onChangeMode={function(){alert('Header');}}/>
      <Main />
      <Nav topics={topics} />
      <Footer />
    </>
  )
}

export default App

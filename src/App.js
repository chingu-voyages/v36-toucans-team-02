import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import VoteItems from './component/VoteItems';
import Header from './component/Header';
import HeroContent from './component/HeroContent';
import VotingPage from './component/VotingPage';

function App() {
  return (
    <div>
      < Header />
      < HeroContent />
      < VoteItems />
      < VotingPage />
    </div>
  );
}

export default App;

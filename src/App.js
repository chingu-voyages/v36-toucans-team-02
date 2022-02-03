import './App.css';
import FooterCom from './component/FooterCom';
import NavbarCom from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import VoteItems from './component/VoteItems';
import Header from './component/Header';
import HeroContent from './component/HeroContent';
// import { Route, Routes } from 'react-router-dom';
// import VotingPage from './component/VotingPage';





function App() {
	return (
		<div>
      <NavbarCom />
      < Header />
      < HeroContent />
      < VoteItems />
			<FooterCom />
		</div>
	);
}

export default App;
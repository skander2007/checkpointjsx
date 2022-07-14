import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './component/profile/profilePhoto/ProfilePhoto';
import FullName from './component/profile/fullName/FullName';
import Adress from './component/profile/adress/Adress';

function App() {
  return (
    <div className="App">
      <FullName/>
      <Adress/>
      <ProfilePhoto/>
    </div>
  );
}

export default App;

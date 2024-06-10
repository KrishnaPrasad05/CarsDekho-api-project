import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardLgComp from './Components/CardLg/CardLgComp';
import CardSmComp from './Components/CardSm/CardSmComp';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import CardLg from './Components/CardLg/CardLg';
import CardSm from './Components/CardSm/CardSm';
import YourComponent from './Components/sample';
import PexelsAPIComponent from './Components/sample';
import Sample1 from './Components/sample1';
import CardDetail from './Components/CardDetail/CardDetail';
import CarSearch from './Components/CardLg/CardSearch';
import GifSearchApp from './Components/CardLg/CardSearch';
import NinjaCarSearch from './Components/CardLg/CardSearch';
import CardYear from './Components/CardSm/CardYear';
import CardFuel from './Components/CardSm/cardFuel';
import CardTrans from './Components/CardSm/cardTrans';
import {Routes ,Route} from 'react-router-dom';
import CardDetailComp from './Components/CardDetail/CardDetailComp';
import ContactUs from './Components/ContactUs/contactUs';
import FaqEmp from './Components/FAQ/FAQ';
import CardSearchDetailComp from './Components/CardLg/CardSearchDetails';
function App() {
  return (
    <div>
     <Header/>
    <Routes>
      <Route path='/' element ={<CardLg />}/>
      <Route path='/byyear' element ={<CardYear/>}/>
      <Route path='/byfuel' element ={<CardFuel />}/>
      <Route path='/bytrans' element ={<CardTrans/>}/>
      
      <Route path="/cardetails" element={<CardDetailComp />} />
      <Route path="/carsearchdetails" element={<CardSearchDetailComp />} />
      <Route path="/contactus" element={<ContactUs/>} />
      <Route path="/faq" element={<FaqEmp/>} />
    </Routes>
     <Footer/>
    </div>
  
  );
}

export default App;

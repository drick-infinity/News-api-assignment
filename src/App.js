import React,{useState} from "react";
import Navbar from "./components/Navbar";
import NewsBoard from "./components/NewsBoard";
import Footer from "./components/Footer";
function App() {
  const [category, setCategory] = useState("general");
  const [searchQuery, setSearchQuery] = useState('');
  return (
  <>
  <Navbar setCategory={setCategory} setSearchQuery={setSearchQuery}/>
  <NewsBoard category={category} searchQuery={searchQuery}/>
  <Footer/>
  </>
  );
}

export default App;


import './App.css';
import Accordian from './components/accordion';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/*Accordian component */} 
      <Accordian/>

      {/*Random color component */}
      <RandomColor/>
      {/*Star Rating component*/}
      <StarRating noOfStars={10}/>
      {/*Image slider component */}
      <ImageSlider url={"https://picsum.photos/v2/list"}
      page={"1"}
      limit={"10"}/>

      {/* Load more products component */}
       <LoadMoreData/>
    </div>
  );
}

export default App;

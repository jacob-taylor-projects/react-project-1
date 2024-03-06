
import './App.css';
import Accordian from './components/accordion';
import ModalTest from './components/custom-modal-popup/modal-test';
import TabTest from './components/custom-tabs/tab-test';
import FeatureFlags from './components/feature-flag';
import FeatureFlagGlobalState from './components/feature-flag/context';
import GithubProfileFinder from './components/github-profile-finder';
import ImageSlider from './components/image-slider';
import LightDarkMode from './components/light-dark-mode';
import LoadMoreData from './components/load-more-data';
import QRCodeGenerator from './components/qr-code-generator';
import RandomColor from './components/random-color';
import ScrollIndicator from './components/scroll-indicator';
import ScrollToTopAndBottom from './components/scroll-to-top-and-bottom';
import SearchAutocomplete from './components/search-autocomplete-with-api';
import StarRating from './components/star-rating';
import TicTacToe from './components/tic-tac-toe';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';
import UseFetchHookTest from './components/use-fetch/test';
import UseOnClickOutsideTest from './components/use-outside-click/test';
import UseWindowResizeTest from './components/use-window-resize/test';

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
       {/*Tree view Component/menu UI component/recursive navigation menu */}
     <TreeView menus={menus}/>
     {/*Qr code generator component */}
     <QRCodeGenerator/>
     {/*light and dark theme switch */}
     <LightDarkMode/>
     {/*Scroll Indicator Component*/}
     <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>
     {/*Custom Tab Component */}
    <TabTest/>
    {/**Custom modal Component */}
    <ModalTest/>
    {/*Github Profile Finder */}
   
    {/*Search Autocomplete */}
    <SearchAutocomplete/>
    {/*Tic tac toe */}
    <TicTacToe/>
    {/*Feature Flag Implementation */}
    <FeatureFlagGlobalState>
      <FeatureFlags/>
    </FeatureFlagGlobalState>
    {/*useFetch - Custom hook */}
    <UseFetchHookTest/>
    {/*Use onClick Outside Hook Test */}
    <UseOnClickOutsideTest/>
    {/*Use Window Resize Hook Test */}
    <UseWindowResizeTest/>
    {/*Scroll to Top and Bottom */}
    <ScrollToTopAndBottom/>
    </div>
  );
}

export default App;

import './App.css';
import movie from './movie.svg';
import search from './search.svg';
import AutoComplete from './components/AutoComplete.js'
function App() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-screen">
      <div className="h-full">
        <div className="grid grid-cols-3 mx-14 h-1/6 " >
            <div className="col-span-3 row-span-1 w-full bg-gradient-to-r h-full from-yellow-500 to-red-500">
              <div className="grid grid-cols-1 h-4/6 mx-14 my-2 ">
                  <div className="flex w-full justify-center">
                    <div className="flex items-center justify-center  w-24 h-10h-full opacity-75 bg-gray-100 rounded-l-lg" >
                      <img alt="movie" className="w-12 h-12" src={movie}></img>
                      
                    </div>
                      <AutoComplete />
                    <div className="flex items-center justify-center rounded-lg mx-4 w-24 bg-gray-100 h-full">
                      <img alt="search" className="w-12 h-12 justify-self-center"  src={search}></img>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div className="grid grid-cols-3 mx-14 h-5/6 " >
            <div className="col-span-3 row-span-1 w-full  bg-gray-50">
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;

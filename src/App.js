import './App.css';
import movie from './movie.svg';
import search from './search.svg';
function App() {
  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-screen">
      <div className="h-full">
        <div className="grid grid-cols-3 mx-14 h-1/6 " >
            <div className="col-span-3 row-span-1 w-full bg-gradient-to-r h-full from-yellow-500 to-red-500">
              <div className="grid grid-cols-1 h-4/6 mx-14 my-2 ">
                  <div className="flex w-full justify-center">
                    <div className="flex items-center justify-center  w-24 h-10h-full opacity-75 bg-gray-100 rounded-l-lg" >
                      <img className="w-12 h-12" src={movie}></img>
                    </div>
                    <div className="px-5 text-2xl py-4 w-1/2 bg-gray-100 h-full rounded-r-lg">
                      <input  className="w-full h-full outline-none bg-gray-100 text-black font-normal opacity-75" placeholder="Enter movie name"></input>
                      <div className="absolute rounded mt-4 bg-white text-black z-10 border-t-2 w-2/5 shadow-lg">
                          <div className="hover:bg-gray-100" >
                            <h2 className="ml-4">Harry potter</h2>
                            <p className="text-sm ml-4">8.8 Rating, 2001</p>
                          </div>
                          <div className=" hover:bg-gray-100">                            
                            <h2 className="ml-4">Harry potter</h2>
                            <p className="text-sm ml-4">8.8 Rating, 2001</p></div>
                          <div className="hover:bg-gray-100">
                            <h2 className="ml-4">Harry potter</h2>
                            <p className="text-sm ml-4">8.8 Rating, 2001</p>
                          </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center rounded-lg mx-4 w-24 bg-gray-100 h-full">
                      <img className="w-12 h-12 justify-self-center"  src={search}></img>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div className="grid grid-cols-3 mx-14 h-5/6 " >
            <div className="col-span-3 row-span-1 w-full  bg-gray-50">
              <h1></h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;

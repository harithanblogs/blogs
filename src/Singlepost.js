import "./caro.css"
import React, { useState} from 'react';
function Singlepost() {
  const [vis, setVisiblity] = useState(["visible", "invisible", "invisible"]);
  const n = function nextSlide() {
    let t = vis.pop();
    vis.unshift(t);
    // vis.unshift(vis.pop())
    setVisiblity([...vis]);
    // console.log(vis);
  }

  const p =function previousSlide(){
    let t = vis.shift();
    vis.push(t);
    // vis.push(vis.shift())
    setVisiblity([...vis]);
    // console.log(vis);
  }
  return (
    <>
      <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 xl:px-3 md:px-2 sm:px-4 px-8 py-5" key="1">
          <div className="relative">          

            <img className={"absolute h-400  mb-6"+vis[1]} src={"https://via.placeholder.com/900.png?text=Middle"} alt="content" />
            <img className={"absolute  h-400  mb-6 "+vis[2]} src={"https://via.placeholder.com/900.png?text=Second"} alt="content" />
            <img className={"h-400  mb-6 "+vis[0]} src={"https://via.placeholder.com/900.png?text=First"} alt="content" />
            <button className="absolute bottom-0 right-0 bg-white w-8 h-8 flex items-center justify-center text-black" onClick={n}>&#x276F;</button>
            <button className="absolute bottom-0 right-0 bg-white w-8 h-8 mr-8 border-r border-gray-400 flex items-center justify-center text-black" onClick={p}>&#x276E;</button>
   

          <button className="absolute top-2 left-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
          </button>
        </div>
      </div>

    </>  

  );
};
export default Singlepost;
// transition-all ease-in-out duration-1000 transform translate-x-full slide 
// transition-all ease-in-out duration-1000 transform translate-x-full slide 
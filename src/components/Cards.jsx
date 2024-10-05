import React from "react";

function Cards() {
  return (
    <div data-scroll  data-scroll-speed=".3" className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card relative w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center">
          <img
            className="w-32 rounded-2xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLZMp1rXIVI3Uvqr-kPCHru-wEoyEiRsIa9YDHyNFylpeLLd_"
            alt=""
          />
          <button className="absolute px-5 py-1 left-10 bottom-10 border-2 rounded-full border-[#CDEA68] text-[#CDEA68]">
            &copy; GHOST
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative flex items-center justify-center w-full rounded-xl h-full bg-[#0e332e]">
          <img
            className="w-32 rounded-2xl"
            src="https://i.pinimg.com/564x/62/7f/48/627f4893cfaebf52a84bf1d19fbbbd31.jpg"
            alt=""
          />
          <button className="absolute px-5 py-1 left-10 bottom-10 border-2 rounded-full border-[#CDEA68] text-[#CDEA68]">
            &copy; OMEN
          </button>
        </div>
        <div className="card relative flex items-center justify-center w-full rounded-xl h-full bg-[#0e332e]">
          <img
            className="w-32 rounded-2xl"
            src="https://i.pinimg.com/564x/b3/2f/2b/b32f2bc4939c32416862ee2e7071e7a5.jpg"
            alt=""
          />
          <button className="absolute px-5 py-1 left-10 bottom-10 border-2 rounded-full border-[#CDEA68] text-[#CDEA68]">
            &copy; TF-141
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;

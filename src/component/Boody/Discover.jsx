import Rectangle from "/img/Rectangle 11.jpg";
import Rectangle2  from "/img/Rectangle 13.jpg"

export default function Discover() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
          <img alt="Rectangle" src={Rectangle} />
        </div>
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Discover our <span className="text-[#8f7163]">History</span> 
         </h1>
          <p className="max-w-2xl mx-4 mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
           quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
           consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
             non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
           sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
         
        </div>
      </div>
     <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
     {/* place-self-center */}
        <div className="mr-auto  lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-2xl text-left  tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Why Us         
          </h1>
          <h1 className="max-w-2xl mb-4 inline-block p-2 rounded-3xl bg-[#86a4b4] text-left   dark:text-white">
          Excellent Service 
          </h1>
          <p className="max-w-2xl mx-4 mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          </p>
          <h1 className="max-w-2xl mb-4 inline-block p-2 rounded-3xl bg-[#c8b19d] text-left   dark:text-white">
          Prime Location
          </h1>
          <p className="max-w-2xl mx-4 mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          </p>
          <h1 className="max-w-2xl mb-4 inline-block p-2 rounded-3xl bg-[#a7c9ab] text-left   dark:text-white">
          Delicious Dining  
          </h1>
          <p className="max-w-2xl mx-4 mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          </p>
         
        </div>
        <div className=" lg:mt-0 lg:col-span-5 lg:flex">
          <img alt="Rectangle2" src={Rectangle2} />
        </div>
    
     
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">What do our customers say?</h2>
            <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">Nobis voluptatem magni doloribus voluptate culpa dolor est neque odio. Fuga accusamus qui et omnis unde quia. Perferendis</p>
        </div>
    </div> 
    </section>
  );
}

import React from "react";

export const News = () => {

function pre(e){
  alert("you subscribe ")
  e.preventdefault();

  

}


  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-5xl mx-auto px-6 border-[1px] md:border-[2px] bg-zinc-200  rounded-2xl md:p-2">
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center mb-1 md:mb-0">
            <img
              src="./special1.webp"
              alt="Sonic Jive Earbuds"
              className="max-w-[60%] h-auto"
            />
          </div>

          {/* Subscription Content Section */}
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-gray-600 mb-6">
              Sign up for daily updates & news about our new products and features.
            </p>

            {/* Form Section */}
            <form className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0">
              <input
                type="email"
                placeholder="@ Enter your email"
                className="w-full md:w-auto px-4 py-3 border border-gray-300 rounded-lg  outline-none focus:ring-2 focus:ring-black"
              />
              <button onClick={(e)=> pre(e)}
              
                className="bg-black text-white px-6 py-3 rounded-lg hover:bg-black  shadow-2xl transition-colors md:ml-4">
              
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};



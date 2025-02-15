


import { ChooseUs } from "./choose";
import { Featureone } from "./feature1";
import { Featuresecond } from "./feature2";
import { Featurethird } from "./feature3";
import { Testimonials } from "./testimonials";

import { News } from "./new";

import { Hero } from "./hero";
import { About } from "./about";
import { PricingSection } from "./price";





// Main App Component
export const App = () => {
  return (
    <div>
   
      <Hero />
      <ChooseUs />
      <Featureone />
      <Featuresecond />
      <Featurethird />
      <PricingSection />
      <About />
      <Testimonials />
      <News />
     
    </div>
  );
};



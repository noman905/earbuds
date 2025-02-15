
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { About } from "./about";

import { Navbar } from "./header";
import { Footer } from "./footer";
import { ChooseUs } from "./choose";
import { Testimonials } from "./testimonials";
import { App } from "./App";
import { Featureone } from "./feature1";
import { Featuresecond } from "./feature2";
import { Featurethird } from "./feature3";
import { PricingSection } from "./price";
import { Error } from "./error";









export const Router=(()=>{

    const  router=createBrowserRouter([
        {
         path:"/",
         element:<AppLayout/>,
         errorElement:<Error />,
 
        
 
         children:[
 
           {
 
                 path:"/",
 
                 element:<App />
              
                    
               },
             
         
               ,{
               path:"/Features",
 
               element:<Features />
 
              
 
               },
               {
                 path:"/Reviews" ,
                 element:<Testimonials />
               }
               ,{
 
                 path:"/About",
 
                 element:<About />
              
   
                 },{
                  path:"/price",
                  element:<PricingSection />
                 }
             
 
         ]}]);
    
    
 
 
 
 
 
 return <RouterProvider  router={router}/>
 
 
 
 })
 
 
 


const Features=(()=>{

 return(
  <>
  <ChooseUs />
  <Featureone />
  <Featuresecond />
  <Featurethird />
  </>
 )

})

 
 
  const AppLayout=(()=>{
 
    return(
     <>
     <Navbar />
     <Outlet />
     <Footer />
     </>
 
    )
  })
 
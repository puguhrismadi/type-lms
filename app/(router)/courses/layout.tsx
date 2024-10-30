import React from "react";
import SideNav from "../_components/SideNav";
import Header from "../_components/Header";
const CoursesLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className='w-64 hidden sm:block fixed'><SideNav /></div> 
            <div className='ml-64'>
                <Header />
               
                {children}</div>
        </div>
        
      )
};
export default CoursesLayout;

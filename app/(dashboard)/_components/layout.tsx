import React from "react";
import SideNav from "./SideNav";
import Header from "./Header";
const CoursesLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <div className='w-64 hidden sm:block fixed'><SideNav /></div> 
            <div className='ml-64'>
                <Header />
                <div className="p-4 bg-white"><hr />NOT mAIN Layout</div>
                {children}</div>
        </div>
        
      )
};
export default CoursesLayout;

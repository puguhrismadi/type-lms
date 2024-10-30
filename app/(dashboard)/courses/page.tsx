import WelcomeBanner from "./_components/WelcomBanner";

const CoursePage = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 p-5'>
        {/* Left Container */}
        <div className='col-span-2'> <WelcomeBanner />
        </div>
        {/* Right Container */}
        <div className='bg-gray-400'>Right section</div>
      </div>
    );
};

export default CoursePage;
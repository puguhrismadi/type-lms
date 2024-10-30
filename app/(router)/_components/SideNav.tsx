import { BadgeIcon, BookOpen, GraduationCap} from 'lucide-react' 
import Image from 'next/image';
const SideNav = () => {
    const menu =[
        {
            id:1,
            name:"All Courses",
            link:"/courses",
            icon:BookOpen
        },
        {
            id:2,
            name:"Membership",
            link:"/membership",
            icon:BadgeIcon
        },
        {
            id:3,
            name:"Be Instructor",
            link:"/be-instructor",
            icon:GraduationCap
        }
    ]
    return (
        <div className='p-5 bg-white shadow-sm border h-screen'>
            <div><Image src="/logoipsum-330.svg" alt="logo" width={150} height={30} /></div>
            <hr className='mt-7' />
            <div className='mt-5' >{menu.map((item,index)=>{
                return <div className='group gap-3 mt-1 p-3 text-[18px] text-gray-500 flex cursor-pointer hover:bg-primary hover:text-white items-center rounded-md transition-all ease-in-out duration-300'>
                    <item.icon className='group-hover:animate-bounce'/> <h2>{item.name}</h2>
                </div>
                })}</div>
        </div>
      )
};
export default SideNav;
"use client";
import { BadgeIcon, BookOpen, GaugeCircle, GraduationCap, List, NotebookTabs, Users2 } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const SideNav = () => {
  const GuestMenu = [
    {
      id: 1,
      name: "Dashboard",
      link: "/dashboard",
      icon: GaugeCircle,
    },
    {
      id: 2,
      name: "Browse",
      link: "/search",
      icon: BookOpen,
    },
    {
      id: 3,
      name: "Be Instructor",
      link: "/teacher",
      icon: GraduationCap,
    },
  ];
  const TeacherMenu = [
    {
        id: 1,
        name: "Courses",
        link: "/teacher/courses",
        icon: List,
      },
      {
        id: 2,
        name: "Analytics",
        link: "/teacher/analytics",
        icon: NotebookTabs,
      },
      {
        id: 3,
        name: "List Student",
        link: "/students",
        icon: Users2,
      },
  ];
  const currentPath = usePathname();
  const isTeacherPage = currentPath?.includes("/teacher");
  const menu = isTeacherPage ? TeacherMenu : GuestMenu;
  return (
    <div className="p-5 bg-white shadow-sm border h-screen">
      <div>
        <Image src="/logoipsum-330.svg" alt="logo" width={150} height={30} />
      </div>
      <hr className="mt-7" />
      <div className="mt-5">
        {menu.map((item, index) => {
          const isActive = currentPath === item.link;
          // const isActive = currentPath === item.link
          return (
            <a key={index}
              href={item.link}
              className={`group gap-3 mt-1 p-3 text-[18px] flex cursor-pointer items-center rounded-md transition-all ease-in-out duration-300
                ${isActive ? 'bg-primary text-white' : 'text-gray-500 hover:bg-primary hover:text-white'}
              `}
            >
              <item.icon className="group-hover:animate-bounce " />{" "}
              <h2>{item.name}</h2>
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default SideNav;

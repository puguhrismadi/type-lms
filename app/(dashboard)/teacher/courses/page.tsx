import { Button } from "@/components/ui/button";
import Link from "next/link";

const CousesPage = () => {
    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold">Courses</h1>
            <Link href="/teacher/course/create">
            <Button variant={"ghost"}>New Course</Button>
            </Link>
        </div>
    );
}
export default CousesPage;
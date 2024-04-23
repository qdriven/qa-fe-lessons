import Link from "next/link";
import {ArrowRightIcon} from "@heroicons/react/24/outline";
import SideNav from "@/app/ui/components/dashboard/sidenav";


export default function Page(){
    return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav/>
            </div>
            <section>
                <p>Main Section</p>
            </section>
        </div>
    )
}
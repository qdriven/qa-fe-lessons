import {GlobeAltIcon} from "@heroicons/react/24/outline"
import {inter} from "@/app/ui/fonts";

export default function LessonLogo() {
    return (
        <div className={`${inter.className} flex flex-row items-center  w-full text-white 
                            leading-node lg:w-1/2`}>
            <GlobeAltIcon className="h-12 w-12 rotate-[15deg]">
            </GlobeAltIcon>
            <p className="text-[44px]">LMS</p>
        </div>
    )
}

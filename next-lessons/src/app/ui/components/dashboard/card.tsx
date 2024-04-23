import {inter} from "@/app/ui/fonts";
import {BanknotesIcon, ClockIcon, InboxIcon, UserGroupIcon} from "@heroicons/react/24/outline";

const iconMap = {
    collected: BanknotesIcon,
    customers: UserGroupIcon,
    pending: ClockIcon,
    invoices: InboxIcon,
};

interface CardProperty {
    title: string
    value: string | number
    type: 'invoices' | 'customers' | 'pending' | 'collected'
}

export  async function Card(prop: CardProperty) {
    const Icon = iconMap[prop.type];
    return (
        <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
            <div className="flex p-4">
                <div className="flex flex-row">
                    {Icon ? <Icon className="h-5 w-5 text-gray-700"/> : null}
                    <h3 className="ml-1 text-md font-medium">{prop.title}</h3>
                </div>
                <div className="px-5">
                    <p className={`${inter.className} truncate rounded-xl bg-white px-4 py-4 text-center text-xl`}>
                        {prop.value}
                    </p>
                </div>
            </div>
        </div>
    )
}

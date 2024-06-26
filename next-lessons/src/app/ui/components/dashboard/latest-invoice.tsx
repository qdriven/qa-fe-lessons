import {inter} from "@/app/ui/fonts";
import {fetchLatestInvoices} from "@/lib/dashboard/store";
import clsx from "clsx";
import {InvoicesTable} from "@/lib/dashboard/types";
import Image from 'next/image';


export default async function LatestInvoices() {
    const latestInvoices: InvoicesTable[] = await fetchLatestInvoices()
    return (
        <div className="flex w-full flex-col md:col-span-4">
            <h2 className={`${inter.className} mb-4 text-xl md:text-2xl`}>
                Latest Invoices
            </h2>
            <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-4">
                <div className="bg-white px-6">
                    {latestInvoices.map((invoice, i) => {
                        return (
                            <div
                                key={invoice.id}
                                className={clsx(
                                    'flex flex-row items-center justify-between py-2',
                                    {
                                        'border-t': i !== 0,
                                    },
                                )}
                            >
                                <div className="flex items-center">
                                    <Image
                                        src={invoice.image_url}
                                        alt={`${invoice.name}'s profile picture`}
                                        className="mr-4 rounded-full"
                                        width={32}
                                        height={32}
                                    />
                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-semibold md:text-base">
                                            {invoice.name}
                                        </p>
                                        <p className="hidden text-sm text-gray-500 sm:block">
                                            {invoice.email}
                                        </p>
                                    </div>
                                </div>
                                <p
                                    className={`${inter.className} truncate text-sm font-medium md:text-base`}
                                >
                                    {invoice.amount}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
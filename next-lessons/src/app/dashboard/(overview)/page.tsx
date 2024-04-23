import {inter} from "@/app/ui/fonts";
import {Suspense} from "react";
import {CardsSkeleton, LatestInvoicesSkeleton, RevenueChartSkeleton} from "@/app/ui/components/skeletons";
import CardWrapper from "@/app/ui/components/dashboard/cards";
import LatestInvoices from "@/app/ui/components/dashboard/latest-invoice";
import RevenueChart from "@/app/ui/components/dashboard/revenue";


export default function Page() {
    return (
        <main>
            <h1 className={`${inter.className} mb-4 text-xl md:text-2xl`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton/>}>
                    <CardWrapper/>
                </Suspense>
            </div>
            <div className="mt-6 grid gap-6 grid-cols md:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<RevenueChartSkeleton/>}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton/>}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    )
}
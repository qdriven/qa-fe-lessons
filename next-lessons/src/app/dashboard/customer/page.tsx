import { Metadata } from 'next';
import {fetchCustomers} from "@/lib/dashboard/store";
import CustomersTable from "@/app/ui/components/customers/table";

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || '';

  const customers = await fetchCustomers();

  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  );
}

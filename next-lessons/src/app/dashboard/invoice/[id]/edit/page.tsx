import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import {fetchCustomers, fetchInvoiceById} from "@/lib/dashboard/store";
import Breadcrumbs from "@/app/ui/components/invoice/breadcrumbs";
import CreateForm from "@/app/ui/components/invoice/create-form";

export const metadata: Metadata = {
  title: 'Edit Invoice',
};

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);

  if (!invoice) {
    notFound();
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/invoices/${id}/edit`,
            active: true,
          },
        ]}
      />
      <CreateForm  customers={customers} />
    </main>
  );
}

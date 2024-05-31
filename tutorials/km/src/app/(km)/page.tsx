import KMSearch from "@/components/block/search/KMSearch";
import CategoriesList from "@/components/block/category/CategoryList";

export default async function Homepage() {
  return (
    <>
      <KMSearch />
      <main>
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold">Browse by category</h1>
          <div className="mt-6">
            <CategoriesList />
          </div>
        </div>
      </main>
    </>
  );
}

import { notFound } from "next/navigation";

import { reader } from "@/lib/reader";
import Breadcrumbs from "@/components/ui/breadcrumbs"
import KMSearch from "@/components/block/search/KMSearch"
import DocumentRenderer from "@/components/block/category/document-renderer";
import CategoriesList from "@/components/block/category/CategoryList";

export async function generateStaticParams() {
    const topics = await reader.collections.topics.all();
    return topics.map((topic) => ({
        category: topic.entry.category,
        topic: topic.slug,
    }));
}
//ts-ignore
export async function generateMetadata({ params }) {
    const topic = await reader.collections.topics.read(params.topic, {
        resolveLinkedFiles: true,
    });

    if (!topic) throw new Error("Topic not found");

    const firstParagraph = topic.content.filter(
        (slice) => slice.type === "paragraph"
    )[0].children[0].text as string;

    const title = topic.title;
    const description =
        firstParagraph.length > 155
            ? firstParagraph.slice(0, 155) + "..."
            : firstParagraph;

    return {
        title: title,
        description: description,
        openGraph: {
            title: title,
            description: description,
            siteName: title,
            images: [
                {
                    url: `/og?title=${title}`,
                    width: 800,
                    height: 600,
                },
                {
                    url: `/og?title=${title}`,
                    width: 1600,
                    height: 1200,
                },
            ],
            locale: "en_AU",
            type: "website",
        },
    };
}
//ts-ignore
export default async function TopicPage({ params }) {
    const topic = await reader.collections.topics.read(params.topic, {
        resolveLinkedFiles: true,
    });
    console.log(topic)
    if (!topic) return notFound();

    const category = await reader.collections.categories.read(params.category);
    if (!category) throw new Error("Category not found");

    return (
        <>
            <KMSearch />
            <main>
                <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="prose mx-auto max-w-prose">
                        <Breadcrumbs
                            crumbs={[{ name: category.name, href: `/${params.category}` }]}
                        />
                        <h1 className="mt-4">{topic.title}</h1>
                        <DocumentRenderer document={topic.content} />
                        <hr />
                    </div>

                    <div className="mt-20">
                        <CategoriesList />
                    </div>
                </div>
            </main>
        </>
    );
}

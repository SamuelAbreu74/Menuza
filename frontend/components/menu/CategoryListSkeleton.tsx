export default function CategoryListSkeleton() {
    // Simula 2 categorias com 3 cards cada
    const skeletonCategories = [1, 2];
    const skeletonProducts = [1, 2, 3];

    return (
        <div className="flex flex-col p-4 text-black animate-pulse">
            {skeletonCategories.map(cat => (
                <div key={cat} className="flex flex-col gap-5 border border-slate-200 rounded-lg p-4 mt-5">
                    {/* Header da categoria */}
                    <div className="flex flex-row gap-5 items-center">
                        <div className="h-6 w-40 bg-gray-300 rounded" />
                        <div className="flex-1 h-0.5 bg-slate-200" />
                        <div className="h-4 w-16 bg-gray-300 rounded" />
                    </div>

                    {/* Grid de cards skeleton */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-fit">
                        {skeletonProducts.map(prod => (
                            <div
                                key={prod}
                                className="flex gap-4 justify-between max-w-90 border border-gray-200 rounded-lg shadow-gray-200 shadow-lg p-6 mt-2"
                            >
                                <div className="flex flex-col gap-6 justify-between flex-1">
                                    <div className="flex flex-col gap-2">
                                        <div className="h-5 w-32 bg-gray-300 rounded" />
                                        <div className="h-4 w-48 bg-gray-200 rounded" />
                                        <div className="h-4 w-36 bg-gray-200 rounded" />
                                    </div>
                                    <div className="h-5 w-20 bg-orange-200 rounded" />
                                </div>
                                <div className="w-37.5 h-37.5 bg-gray-200 rounded-lg shrink-0" />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

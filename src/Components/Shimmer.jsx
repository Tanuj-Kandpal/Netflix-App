function Shimmer({ className }) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-200 to-transparent animate-shimmer" />
    </div>
  );
}

function ShimmerPage() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold mb-4"></h1>

      <div className="space-y-4">
        {/* Shimmer for a title */}
        <Shimmer className="h-8 w-3/4 bg-gray-100 rounded" />

        {/* Shimmer for text lines */}
        <div className="space-y-2">
          <Shimmer className="h-4 w-full bg-gray-100 rounded" />
          <Shimmer className="h-4 w-5/6 bg-gray-100 rounded" />
          <Shimmer className="h-4 w-4/6 bg-gray-100 rounded" />
        </div>

        {/* Shimmer for an image placeholder */}
        <Shimmer className="h-48 w-full bg-gray-100 rounded" />

        {/* Shimmer for a button */}
        <Shimmer className="h-10 w-32 bg-gray-100 rounded-full" />
      </div>
    </div>
  );
}
export default ShimmerPage;

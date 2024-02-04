import { Suspense } from "react";
import { Results, SkeletonResults } from "./_components/result";

const Home = () => {
  return (
    <div className="h-full p-8 max-h-screen-2xl mx-auto">
      <Suspense fallback={<SkeletonResults />}>
        <Results />
      </Suspense>
    </div>
  );
};

export default Home;

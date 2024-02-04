import { redirect } from "next/navigation";
import { Result, ResultSkeleton } from "./_components/result";
import { Suspense } from "react";

interface SearachPageProps {
  searchParams: {
    term?: string;
  };
}

const SearchPage = ({ searchParams }: SearachPageProps) => {
  if (!searchParams.term) {
    redirect("/");
  }
  return (
    <div className="h-full p-8 max-w-screen-2xl mx-auto">
      <Suspense fallback={<ResultSkeleton />}>
        <Result term={searchParams.term} />
      </Suspense>
    </div>
  );
};

export default SearchPage;

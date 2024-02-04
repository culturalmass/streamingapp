interface ResultsProps {
  term?: string;
}

export const Result = ({ term }: ResultsProps) => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">
        Result for term &quot;{term}&quot;
      </h2>
    </div>
  );
};

export const ResultSkeleton = () => {
  return <div>df</div>;
};

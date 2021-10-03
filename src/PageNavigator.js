export const PageNavigator = ({
  fetchPrevPage,
  fetchNextPage,
  prevDisabled,
  nextDisabled,
}) => {
  return (
    <div>
      <button onClick={fetchPrevPage} disabled={prevDisabled}>
        Previous
      </button>
      <button onClick={fetchNextPage} disabled={nextDisabled}>
        Next
      </button>
    </div>
  );
};

export default PageNavigator;

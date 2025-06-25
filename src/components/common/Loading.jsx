const Loading = () => {
  return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-600"></div>
      <span className="ml-2 text-blue-600">Loading....</span>
    </div>
  );
};
export default Loading;

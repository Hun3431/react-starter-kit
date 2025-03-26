const NotFoundPage = () => {
  return (
    <div className="w-full h-dvh flex flex-col items-center justify-center gap-10 text-black dark:text-white">
      <div className="text-9xl font-semibold">404</div>
      <div className="text-3xl font-bold">Page Not Found</div>
      <button className="bg-indigo-400 px-6 py-4 rounded-full text-white font-semibold">
        Back to home
      </button>
    </div>
  );
};

export default NotFoundPage;

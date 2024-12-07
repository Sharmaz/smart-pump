function PageError() {
  return (
    <div className="container flex justify-center items-center h-screen">
      <div className="bg-blue-500 p-8 rounded-lg">
        <div className="error-message">
          <h1 className="text-2xl text-white font-mono font-extrabold">Oops!</h1>
          <p className="text-2xl text-white font-mono font-extrabold">Sorry, an unexpected error has occurred.</p>
        </div>
      </div>
    </div>
  );
}

export default PageError;

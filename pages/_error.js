function Error({ statusCode }) {
  return (
    <div className="h-9 w-full ">
      <p className=" text-center dark:text-indigo-3 p-20 font-bold tracking-widest text-red-600 bg-black mt-20 ">
        {statusCode
          ? `An error ${statusCode} occurred. Try with valid pokemon name`
          : "An error occurred on client"}
      </p>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;

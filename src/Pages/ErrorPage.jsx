import { useNavigate, useRouteError } from "react-router-dom";
import Errorsvg from "../assets/undraw_page-not-found_6wni.svg";
function ErrorPage() {
  //This is breaking change breaking a code -- giving folllowing error -
  /**
 * 
 * react-router-dom.js?v=babeff83:209 Uncaught Error: useRouteError must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.
    at ErrorPage (ErrorPage.jsx?t=1735584783127:21:17)
 */
  //   const error = useRouteError();
  //   console.log(error);
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/");
  }
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Oops! Something went wrong.
          </h2>
          <span>
            <img
              className=""
              src={Errorsvg}
              alt="Page not found Image not found"
            />
          </span>
          <p className="mt-2 text-sm text-gray-600">
            We apologize for the inconvenience. Our team has been notified and
            is working on fixing the issue.
          </p>
          <div className="mt-5">
            <button
              onClick={handleNavigate}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;

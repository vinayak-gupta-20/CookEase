import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import ApiError from "../components/design/ApiError";
import { useFetch } from "../components/hook/useFetch";
import LoadingContent from "../components/design/LoadingContent";

const nav = [
  {
    name: "Instructions",
    tab: "instructions",
  },
  {
    name: "Ingredients",
    tab: "ingredients",
  },
];

function Recipe() {
  const { id } = useParams();

  const [activeTab, setActiveTab] = useState("instructions");

  const { isLoading, apiError, reqData } = useFetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${
      import.meta.env.VITE_API_KEY
    }`
  );

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        {isLoading ? (
          <title>Loading... </title>
        ) : (
          <title>
            {!apiError ? reqData?.title : "Api Error - try again later"}
          </title>
        )}
        <link
          rel="canonical"
          href={`https://react-recipe-finder-2022.netlify.app/recipe/${id}`}
        />
      </Helmet>

      {isLoading && <LoadingContent message="Loading" />}

      {!isLoading && apiError && <ApiError />}

      {!isLoading && !apiError && (
        <section className="py-16 min-h-screen ">
          <div className="container mx-auto px-4">
            <div className="space-y-4 mb-8">
              <h1 className="text-5xl font-extrabold text-gray-900">
                {reqData?.title}
              </h1>
              <p
                className="max-w-5xl text-gray-700 text-lg"
                dangerouslySetInnerHTML={{ __html: reqData?.summary }}
              />
            </div>

            <div className="flex flex-col lg:flex-row items-start gap-12 justify-between">
              <div className="flex-1 space-y-6">
                <div className="flex gap-8 border-b border-gray-300 pb-4">
                  {nav.map((data) => (
                    <p
                      key={data.name}
                      onClick={() => setActiveTab(data.tab)}
                      className={`${
                        activeTab === data.tab
                          ? "border-b-2 border-indigo-500 text-indigo-500"
                          : "text-gray-600 hover:text-indigo-500"
                      } cursor-pointer pb-2 font-semibold transition duration-300`}
                    >
                      {data.name}
                    </p>
                  ))}
                </div>

                <div className="relative max-w-lg flex gap-8">
                  <div
                    className={`${
                      activeTab === "instructions"
                        ? "opacity-100 pointer-events-auto translate-x-0"
                        : "opacity-0 pointer-events-none absolute w-full h-fit inset-0 translate-x-4"
                    } transition-opacity duration-300 text-gray-700`}
                    dangerouslySetInnerHTML={{ __html: reqData?.instructions }}
                  />

                  {reqData?.extendedIngredients && (
                    <div
                      className={`${
                        activeTab === "ingredients"
                          ? "opacity-100 pointer-events-auto translate-x-0"
                          : "opacity-0 pointer-events-none absolute w-full h-fit inset-0 translate-x-4"
                      } transition-opacity duration-300 space-y-1 text-gray-700`}
                    >
                      {reqData?.extendedIngredients.map((data) => (
                        <p key={data.id} className="flex items-center">
                          <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full mr-2"></span>
                          {data.original}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex-1 lg:sticky lg:top-20">
                <img
                  className="rounded-2xl w-full object-cover shadow-xl transition-transform duration-500 hover:scale-105"
                  src={reqData?.image}
                  alt={reqData?.title}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Recipe;

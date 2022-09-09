/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Header titleName="Home" />

      <div className=" h-screen flex p-2 mx-auto">
        <div className="flex lg:text-start m-auto shadow-xl p-4 bg-slate-200 rounded-lg transition-all ease-in-out md:p-10 md:text-2xl lg:p-16 lg:mx-20 lg:text-4xl">
          <section>
            <h1 className="text-2xl md:text-4xl lg:text-6xl">Hi, i'm Azka</h1>

            <code>
              Software Engineer
            </code>
            {/* what i do */}
            <div className="flex lg:block bg-gray-900 w-max p-2 rounded-lg text-white content-center m-auto">
              Python and React Fullstack Developer
            </div>

          </section>
        </div>
      </div>
    </>
  );
};

export default Home;



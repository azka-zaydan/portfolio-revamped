/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { useThemeContext } from "../context/ThemeContext";
const Home: NextPage = () => {
  const { currentTheme } = useThemeContext()
  return (
    <>
      <Header titleName="Home" />
      <Layout>
        <div
          className={`flex ${currentTheme} lg:text-start m-auto shadow-2xl p-4 bg-inherit rounded-lg transition-all ease-in-out md:p-10 md:text-2xl lg:p-16 lg:mx-20 lg:text-4xl`}
        >
          <section>
            <h1 className="text-2xl md:text-4xl lg:text-6xl">Hi, i'm Azka</h1>

            <code>
              Software Engineer
            </code>
            <div className={`${currentTheme} flex lg:block w-max rounded-lg content-center m-auto`}>
              <b> Python and React Fullstack Developer </b>
            </div>

          </section>
        </div>
      </Layout>
    </>
  );
};

export default Home;



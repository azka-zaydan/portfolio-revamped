/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Header from "../components/Header";
import Layout from "../components/Layout";
import { motion } from 'framer-motion'
const Home: NextPage = () => {
  return (
    <>
      <Header titleName="Home" />
      <Layout>
        <motion.div
          className="flex lg:text-start m-auto shadow-xl p-4 bg-slate-200 rounded-lg transition-all ease-in-out md:p-10 md:text-2xl lg:p-16 lg:mx-20 lg:text-4xl"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
      </Layout>
    </>
  );
};

export default Home;



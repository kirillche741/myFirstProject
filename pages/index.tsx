import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import styles from "../app/styles/Home.module.css";
import Layout from "../shared/components/Layout/Layout";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Главная страница" description="Главная страница" />
      <Layout>
        <div className={styles.container}>
          <div>Страница</div>
        </div>
      </Layout>
    </>
  );
};

export default Home;

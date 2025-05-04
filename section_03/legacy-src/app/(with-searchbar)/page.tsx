import ClientComponent from "../../components/client-component";
import styles from "./page.module.css";
import ServerComponent from "./../../components/server-component";

const Home = () => {
  return (
    <div className={styles.page}>
      인덱스 페이지
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
};

export default Home;

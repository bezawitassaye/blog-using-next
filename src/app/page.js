import Image from "next/image";
import styles from "./page.module.css";
import Featured from "./components/featured/Featured";
import Catagorylist from "./components/catagorylist/Categorylist";
import Cardlist from "./components/cardlist/Cardlist";
import Menu from "./components/menu/Menu";

export default function Home() {
  return (
    <div className={styles.container}>
     <Featured/>
     <Catagorylist/>
     <div className={styles.content}>
        <Cardlist/>
        <Menu/>
     </div>
    </div>
  );
}

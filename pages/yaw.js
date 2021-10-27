import Image from "next/dist/client/image"
import HeadSEO from "../components/headSeo";
import yaw from "../public/yaw.png"
import styles from "../styles/layout.module.css";

function Yaw() {
  return (
    <>
      <HeadSEO
        title="YAW | HOME"
        description="Hellow every one this is a information about Yaw"
      />
      <main className={styles.main}>
        <Image src={yaw} alt="Yaw Image" />
      </main>
    </>
  );
}

export default Yaw;

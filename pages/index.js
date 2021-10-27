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
        <div className={styles.gridContainer}>
          <Image src={yaw} alt="Yaw Image" />
          <p style={{ maxWidth: "400px", fontSize:'1.5rem' }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
          </p>
        </div>
      </main>
    </>
  );
}

export default Yaw;


import HeadSEO from '../components/headSeo';
import styles from '../styles/Home.module.css'

const data = [
  {
    title: "Documentation",
    content: "Find in-depth information about Next.js features and API.",
    url: "https://nextjs.org/docs",
  },
  {
    title: "Learn",
    content: "Learn about Next.js in an interactive course with quizzes!",
    url: "https://nextjs.org/learn",
  },
  {
    title: "Examples",
    content: "Discover and deploy boilerplate example Next.js projects.",
    url: "https://github.com/vercel/next.js/tree/master/examples",
  },
  {
    title: "Deploy",
    content: "Discover and deploy boilerplate example Next.js projects.",
    url: " Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <HeadSEO
        title=" Create Next App"
        description="Generated by create next app"
      />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <div className={styles.grid}>
          {data.map((d) => {
            return (
              <a key={d.name} href={d.url} className={styles.card}>
                <h2>{d.title} &rarr;</h2>
                <p>{d.content}</p>
              </a>
            );
          })}
        </div>
      </main>
    </div>
  );
}

import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import useInformation from "../../hook/useInformation";
import style from '../../styles/layout.module.css'

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data }= useInformation()
  const [blog, setBlog] = useState("aaaaa")

  useEffect(() => {
    const blogFind = data.find((item) => item.title === id);
    setBlog(blogFind);
  }, [])

  return (
    <div className={style.main}>
      <h1>Hello {id}</h1>
      <h2>This is a {id}</h2>
      <p>{blog?.content}</p>
    </div>
  );
}

export default BlogDetail

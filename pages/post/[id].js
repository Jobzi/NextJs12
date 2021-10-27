import { useRouter } from "next/dist/client/router";

const  PostId = ({name})=> {
      const router = useRouter();
      const { id } = router.query;
    return (
      <>
        <div>Hello {id}</div>
        <div>Hello {name}</div>
      </>
    );
}

PostId.getInitialProps = (context) => {
   return { name: "Helloda" };
}

export default PostId
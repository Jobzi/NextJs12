// posts will be populated at build time by getStaticProps()
function Task({ posts }) {
  const {post} = posts;

    return <div>{post}</div>;
}


export function getStaticProps() {
const posts = {post:"Hola soy un post"};
return {
    props: {
      posts,
    },
  };
}

export default Task
import useFetchData from "./hooks/useFetchData";
import Post from "./Post";
import Grid from "@mui/material/Grid";

const Posts = () => {
  const { loading, posts } = useFetchData();

  if (loading) {
    return <h1>loading...</h1>;
  }

  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ paddingLeft: "20px", paddingRight: "20px" }}
      >
        {posts.map((post) => {
          return (
            <Grid item xs={12} sm={6} md={4}>
              <Post key={posts?.id} post={post} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Posts;

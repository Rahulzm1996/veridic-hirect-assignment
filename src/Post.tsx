import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const Post = (props: { post: any }) => {
  const post = props?.post;
  const {
    date,
    link,
    jetpack_featured_media_url,
    primary_category: { name, description },
  } = post;

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="post">
              {name?.charAt(0) ?? ""}
            </Avatar>
          }
          title={name ?? ""}
          subheader={date ?? ""}
        />
        <CardMedia
          component="img"
          height="194"
          image={jetpack_featured_media_url}
          alt={name}
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            maxHeight="120px"
            overflow="auto"
            title={description ?? ""}
          >
            {description ?? ""}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={link} target="_blank">
            <Button>View more</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;

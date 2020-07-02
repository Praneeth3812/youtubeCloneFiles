import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";

const VideoItem = ({ video,onVideoSelect }) => {
  return (
    <Grid item xs={10}>
      <Paper style={{  alignItems: "center" ,cursor : "pointer"}} onClick={()=> onVideoSelect(video)}>
        <img
          style={{ width: "100%",marginRight :"10px",height: "40%" }}
          alt="thumbnail"
          src={video.snippet.thumbnails.medium.url}
        />
        <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
      </Paper>
    </Grid>
  );
};

export default VideoItem;

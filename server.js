import express from "express";
import request from "request";

const app = express();

const STREAM_URL = "http://178.32.146.184:1250/stream";

app.get("/", (req, res) => {
  res.setHeader("Content-Type", "audio/mpeg");
  request(STREAM_URL).pipe(res);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy running on port ${PORT}`));

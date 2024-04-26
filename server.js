import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: duzqrxe8t,
  api_key: 134755747279345,
  api_secret: VIuVW7RTt8hTSIXwohMbyzA48Qo,
});

app.listen(4000||10000, () => {
  console.log(`Server running at port 4000`);
});
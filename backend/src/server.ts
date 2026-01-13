import app from "./app.js";
import { env } from "./config/env.js";

const port = env.PORT || 5000


app.listen(port, () => {
    console.log(`Server running on port: ${port}`)
})
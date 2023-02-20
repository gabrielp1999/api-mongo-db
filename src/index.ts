import "dotenv/config";
import app from "./app";
import RenderStart from "./config"

const PORT = process.env.PORT;

RenderStart.start()

app.listen(PORT, () => console.log(`Server is running in ${PORT}`))
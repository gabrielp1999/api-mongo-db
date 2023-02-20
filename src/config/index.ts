import { startDb } from "./db/mongoDB";

class RenderStart {
    start(){
        startDb()
    }
}
export default new RenderStart;
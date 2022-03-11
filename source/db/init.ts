import Library from "./models/library"
import UserModel from "./models/userModel"

const dbInit = () => {
    UserModel.sync();
    Library.sync();
}
export default dbInit 
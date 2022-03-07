import Library from "./models/library"
import UserModel from "./models/userModel"

const dbInit = () => {
    Library.sync();
    UserModel.sync();
}
export default dbInit 
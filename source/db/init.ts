import Library from "./models/library"

const dbInit = () => {
    Library.sync()
}
export default dbInit 
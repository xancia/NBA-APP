import Nav from "./Nav"


const Form = () => {
  return (
    <div className="h-screen w-full">
        <Nav />
        <div className="flex justify-center items-center h-full pb-24 text-center">
        <form>
            <label>Name</label>
            <br />
            <input className="border border-gray-800 rounded-sm"></input>
            <br />
            <label>Email</label>
            <br />
            <input className="border border-gray-800 rounded-sm"></input>
            <br />
            <div>
            <label>Comment</label>
            <br />
            <input className="border border-gray-800 w-80 h-32"></input>
            <br />
            </div>
        </form>
        </div>
    </div>
  )
}

export default Form
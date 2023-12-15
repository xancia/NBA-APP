import Nav from "./Nav"


const Home = () => {

  return (
    <div className=" bg-gradient-to-b from-gray-600 to bg-slate-800">
      <Nav />
      <div className="flex justify-center items-center h-screen pb-20">
        <iframe width="1080" height="620" src="https://www.youtube.com/embed/XPeT2Tfk9gM?si=7xlLKE6ea_did5zb" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  )
}

export default Home
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>AllDone - Linktree</title>
      </Head>
      <div className="bg-gradient-to-b from-sky-500 to-blue-600 h-screen w-screen">
        <nav className="bg-transparent border-l-pink-700 px-2 sm:px-4 py-2.5 rounded  dark:bg-sky-500">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="#" className="flex items-center border-none">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-white">MyApp</span>
            </a>
            {/* <div className="hidden w-full md:block md:w-auto">
              <ul className="flex flex-row space-x-4 p-1 mt-1 border border-transparent rounded-lg md:bg-transparent text-white ">
                <li>
                  <a href="#" className="block rounded-lg border border-white py-2 px-2 hover:text-sky-500 hover:bg-white">
                  Home</a></li>
                <li>
                  <a href="#" className="block rounded-lg border border-white py-2 px-2 hover:text-sky-500 hover:bg-white">
                  About</a></li>
                
              </ul>
            </div> */}
          </div>
        </nav>

        <div className="grid pt-10 place-items-center">
          <div className="max-w-sm rounded overflow-hidden shadow-xl pb-50">

            <div className="flex flex-col items-center justify-center bg-transparent p-10 gap-3">
              <div className="object-cover h-40 w-40 rounded-full shadow-2xl animate-pulse" >

                <img src="https://my.its.ac.id/sso/user/8863D097-185F-44ED-8487-F84A6FEBB537/picture?update=1677076443013" alt="" className=" h-40 mx-auto object-cover rounded-full w-40" />
              </div>
              <p className="block font-bold text-lg text-white">Aldan Prayogi</p>

              <a href="https://www.instagram.com/aldan_prayogi/" id="content" className=" py-5 px-20 bg-transparent rounded-md max-w-sm border-2 border-yellow-400 text-yellow-300 font-bold hover:text-white hover:bg-yellow-400 hover:border-transparent w-full text-center">Instagram</a>
              <a href="https://github.com/alldone03/" id="content" className=" py-5 px-20 bg-transparent rounded-md max-w-sm border-2 border-yellow-400 text-yellow-300 font-bold hover:text-white hover:bg-yellow-400 hover:border-transparent w-full text-center">Github</a>
              <a href="https://www.linkedin.com/in/aldan-prayogi-3bb66a252/" id="content" className=" py-5 px-20 bg-transparent rounded-md max-w-sm border-2 border-yellow-400 text-yellow-300 font-bold hover:text-white hover:bg-yellow-400 hover:border-transparent w-full text-center">LinkedIn</a>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

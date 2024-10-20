import React from "react";
import logo from "../../assets/icons8-laptop-96.png";

function Navbar() {
  return (
    <>
      <section className="py-12 bg-gradient-to-r fixed w-full from-fuchsia-600 to-blue-600">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center xl:flex xl:items-center xl:justify-between xl:text-left">
            <div className="xl:flex xl:items-center xl:justify-start">
              <img className="w-10 mx-auto" src={logo} alt="navbar-logo" />
              <h2 className="mt-5 text-3xl font-semibold text-white xl:ml-6 xl:mt-0">Haven Laptop</h2>
            </div>

            <div className="items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8">
              <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end">
                <li>
                  <a href="#" title="" className="text-xl text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Home </a>
                </li>

                <li>
                  <a href="#" title="" className="text-xl text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> About </a>
                </li>

                <li>
                  <a href="#" title="" className="text-xl text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> All Products </a>
                </li>

                <li>
                  <a href="#" title="" className="text-xl text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Service </a>
                </li>

                <li>
                  <a href="#" title="" className="text-xl text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80"> Contacts </a>
                </li>
              </ul>

              <div className="w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-gray-50/20"></div>

              <ul className="flex items-center justify-center space-x-8 xl:justify-end">
                <li>
                  <a href="#" title="" className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="#" title="WhatsApp" className="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M17.472 14.382c-.297-.148-1.758-.867-2.03-.967-.273-.099-.47-.148-.667.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.074-.297-.148-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.654-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.148-.173.197-.297.297-.495.099-.198.05-.372-.025-.52-.074-.148-.667-1.607-.914-2.196-.242-.579-.487-.499-.667-.499-.173-.015-.372-.015-.571-.015-.198 0-.52.074-.793.372-.273.297-1.04 1.015-1.04 2.48 0 1.465 1.064 2.883 1.214 3.081.148.198 2.095 3.2 5.073 4.488.708.297 1.26.475 1.691.606.71.226 1.355.194 1.868.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.413-.074-.148-.273-.223-.571-.372zM11.999 0C5.373 0 0 5.373 0 12c0 2.116.552 4.111 1.518 5.871L0 24l6.293-1.501C8.071 23.448 9.999 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22.174c-1.835 0-3.591-.498-5.118-1.432l-.366-.218-3.741.893.797-3.647-.237-.372c-.921-1.451-1.407-3.131-1.407-4.997 0-5.372 4.373-9.745 9.745-9.745s9.745 4.373 9.745 9.745c0 5.372-4.373 9.745-9.745 9.745z"
                      ></path>
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="#" title="Email" class="block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80">
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path
                        d="M20.5 4h-17C2.673 4 2 4.673 2 5.5v13c0 .827.673 1.5 1.5 1.5h17c.827 0 1.5-.673 1.5-1.5v-13c0-.827-.673-1.5-1.5-1.5zm0 2v.511l-8.5 5.153L3.5 6.511V6h17zm-17 11.5v-9.26l8.5 5.153 8.5-5.153v9.26h-17z"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
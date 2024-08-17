import { useState } from "react";
import './App.css'
import { FaEllipsisH } from 'react-icons/fa';
import { FaPhone } from "react-icons/fa6";
import { IoCompassOutline } from "react-icons/io5";
import Animation from "./components/Animation";


function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setActiveItem(item === activeItem ? null : item);
  };



  return (
    <div className="flex flex-col gap-8 items-center md:items-start bg-[#f0f0f0]">
      {/* header  */}
      <div className="flex items-center justify-between w-[97%] py-4 px-8 bg-[#fefefe] rounded-md mt-5 mx-5">
        <div className="flex items-center gap-2 bg-[#fefefe]">
          <div className="flex flex-row ">
            <span className="font-bold text-xl text-[#ff3232] bg-[#fefefe]">метр</span>
            <span className="font-bold text-xl text-[#ff3232] bg-[#fefefe]">-на-</span>
            <span className="font-bold text-xl text-[#ff3232] bg-[#fefefe]">метр.ru</span>
          </div>
          <div className='bg-[#fefefe] font-normal text-xl text-[#101010]'>
            |
          </div>
          <div className="flex flex-col bg-[#fefefe]">
            <div className="font-bold text-[#101010] bg-[#fefefe]">
              Мебель на заказ
            </div>
            <div className="font-bold text-[#101010] bg-[#fefefe]">
              по реальным ценам
            </div>
          </div>

        </div>
        <div className='flex flex-row bg-[#fefefe]'>
          <div className='flex flex-row bg-[#fefefe]'>
            <div className=' justify-center align-middle flex flex-row bg-[#ffa6a5] rounded-lg mr-2'>
              <IoCompassOutline className='bg-[#ffa6a5] text-4xl rounded-lg p-2 text-[#fefefe]' />
              <h1 className='text-[#fefefe] bg-[#ffa6a5] rounded-lg  p-1'> | Ростов-на-Дону</h1>
            </div>
            <div className=' justify-center align-middle flex flex-row bg-[#ff7070] rounded-lg mr-2'>
              <FaPhone className='bg-[#ff7070] text-4xl rounded-lg p-2 text-[#fefefe]' />
              <h1 className='text-[#fefefe] bg-[#ff7070] rounded-lg  p-1'> | +7 918 983 47 06</h1>
            </div>
            <FaEllipsisH className="text-4xl rounded-lg bg-[#ffa6a5] p-2 text-[#fefefe]" onClick={handleClick} />

            {isOpen && (
              <div
                className=" z-10 absolute right-0 mt-16 mr-10 w-90 rounded-lg px-5 shadow-xl bg-[#f0f0f0] ring-1 ring-black ring-opacity-5 focus:outline-none py-2 "
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
              >
                <div role="none">

                  <div className="flex flex-row">
                    <a
                      href="#"
                      className="px-2 py-2 text-sm text-[#303030]  hover:text-[#303030] flex flex-row hover:underline"
                      role="menuitem"
                      onClick={() => handleItemClick("Форма для индивидуального заказа")}

                    >
                      {activeItem === "Форма для индивидуального заказа" && (
                        <span className={`relative right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-500 `} />
                      )}
                      Форма для индивидуального заказа

                    </a>
                  </div>
                  <div className="flex flex-row">
                    <a
                      href="#"
                      className="px-2 py-2 text-sm text-[#303030]  hover:text-[#303030] flex flex-row hover:underline"
                      role="menuitem"
                      onClick={() => handleItemClick("Информация о компании")}

                    >
                      {activeItem === "Информация о компании" && (
                        <span className={`relative right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-500 `} />
                      )}
                      Информация о компании

                    </a>
                  </div>
                  <div className="flex flex-row">
                    <a
                      href="#"
                      className="px-2 py-2 text-sm text-[#303030]  hover:text-[#303030] flex flex-row hover:underline"
                      role="menuitem"
                      onClick={() => handleItemClick("F.A.Q.")}

                    >
                      {activeItem === "F.A.Q." && (
                        <span className={`relative right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-500 `} />
                      )}
                      F.A.Q.

                    </a>
                  </div>
                  <div className="flex flex-row">
                    <a
                      href="#"
                      className="px-2 py-2 text-sm text-[#303030]  hover:text-[#303030] flex flex-row hover:underline"
                      role="menuitem"
                      onClick={() => handleItemClick("Форма для оптового заказа")}

                    >
                      {activeItem === "Форма для оптового заказа" && (
                        <span className={`relative right-2 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-500 `} />
                      )}
                      Форма для оптового заказа

                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>



      </div>

      {/* DownMenu */}

      <div className="flex flex-col md:flex-row gap-5 items-center md:items-center w-full max-w-screen px-8 ">
        <div className="flex flex-col gap-1 w-full md:w-1/2">
          <div className="text-2xl font-bold flex flex-row gap-2 text-left">
            <div className='text-[#ff3232]'>Кухонный гарнитур</div> <div>под заказ</div>
          </div>
          <div className="text-2xl font-bold text-left">
            российского производства

          </div>
          <div className="text-2xl font-bold text-left">
            по реальным ценам
          </div>
          <div className="text-2xl font-bold flex flex-row gap-2 text-left">
            <div>с установкой и доставкой</div><div className='text-[#ff3232]'>•</div>
          </div>
          <div className='mt-5 mb-5'>
            <div>Мебель из добротных материалов,</div>
            <div>с возможностью самостоятельно выбирать</div>
            <div>конфигурацию мебели под свой дизайн</div>
          </div>

          <button className="bg-[#ff3232] text-white font-bold py-2 px-4 rounded-xl w-90 h-14 hover:bg-red-700 mt-4">Рассчитать за 2 клика</button>
          <div className='text-center text-xs'>бесплатная доставка от 50000 рублей
            в ближайшие населённые пункты от ростова-на-дону</div>
        </div>
        <div className="w-auto z-0">
          <Animation />
        </div>
      </div>
    </div>
  )
}

export default App

import React from "react";

const Home = () => {
  var today = new Date();

  return (
    <div className="bg-[#B5435E] h-full relative">
      <div className="container ">
        <div className="bg-white  w-[700px] h-[500px] absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] shadow-inner rounded-lg p-4  ">
          <div className="flex items-center justify-center gap-x-5">
            <div className="w-[200px] h-[200px] ">
              <img
                src="./profile1.jpg"
                className="object-cover w-full h-full rounded-full"
                alt=""
              />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <span className="inline-block text-2xl font-extralight">
                  Họ tên:
                </span>
                <span className="inline-block text-2xl font-extralight">
                  Lê Chí Công
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <span className="inline-block text-2xl font-extralight">
                  MSSV:
                </span>
                <span className="inline-block text-2xl font-extralight">
                  4501104031
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <span className="inline-block text-2xl font-extralight">
                  Email:
                </span>
                <span className="inline-block text-2xl font-extralight">
                  conglc530@gmail.com
                </span>
              </div>
              <div className="flex items-center gap-x-2">
                <span className="inline-block text-2xl font-extralight">
                  Khóa học:
                </span>
                <span className="inline-block text-2xl font-extralight">
                  K45 CNTT.A
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16 gap-x-5">
            <div className="w-[150px] h-[150px] bg-pink-500 rounded-lg  flex items-center justify-center border border-pink-200">
              <p className="text-3xl text-white"> {today.getDate()}</p>
            </div>
            <div className="w-[150px] h-[150px] bg-pink-500 rounded-lg  flex items-center justify-center border border-pink-200">
              <p className="text-3xl text-white"> {today.getMonth() + 1}</p>
            </div>
            <div className="w-[150px] h-[150px] bg-pink-500 rounded-lg  flex items-center justify-center border border-pink-200">
              <p className="text-3xl text-white"> {today.getFullYear()}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

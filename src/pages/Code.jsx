import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/images/logo.png";

function Code() {
  const [fullname, setFullname] = useState("");
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    try {
      
      const response = await axios.get(
        "https://api.daksystem.net/hethongnopbai/api/submissions",
        {
          params: {
            name: fullname,
            random_code: code,
          },
        }
      );

      
      if (response.data.message) {
        setError(response.data.message); 
      } else {
        navigate("/home"); 
      }
    } catch (err) {
      setError("Có lỗi xảy ra, vui lòng kiểm tra lại thông tin!"); 
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#212121]">
      <div className="max-w-lg w-full">
        <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <div className="p-8">
            <h2 className="flex justify-center">
              <img src={logo} alt="Logo" className="h-16 mb-4" />
            </h2>
            <form
              method="POST"
              className="mt-8 space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="rounded-md shadow-sm">
                <div>
                  <label className="sr-only" htmlFor="fullname">
                    Họ và tên
                  </label>
                  <input
                    placeholder="Nhập họ và tên"
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    required
                    autoComplete="fullname"
                    type="text"
                    name="fullname"
                    id="fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>
                <div className="mt-4">
                  <label className="sr-only" htmlFor="code">
                    Nhập mã
                  </label>
                  <input
                    placeholder="Nhập mã"
                    className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    required
                    autoComplete="code"
                    type="text"
                    name="code"
                    id="code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <button
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  type="submit"
                >
                  Đăng nhập
                </button>
              </div>
              {error && (
                <p className="text-red-500 text-sm text-center">{error}</p>
              )}
            </form>
          </div>
          <div className="px-8 py-4 bg-gray-700 text-center">
            <span className="text-gray-400">https://daksystem.net/</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Code;

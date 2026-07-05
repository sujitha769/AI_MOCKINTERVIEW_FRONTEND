import { NavLink, useNavigate } from "react-router-dom";

function Sidebar() {

    const navigate = useNavigate();

    const logout = () => {

        localStorage.removeItem("token");

        navigate("/login");

    };

    return (

        <div className="w-64 bg-sky-100 text-slate-800 flex flex-col border-r border-sky-200">

            <div className="text-2xl font-bold p-6 border-b border-sky-200">

                AI Mock

            </div>

            <nav className="flex-1 p-4 space-y-3">

                <NavLink
                    to="/dashboard/mock"
                    className={({ isActive }) =>
                        `block p-3 rounded hover:bg-sky-200 ${
                            isActive ? "bg-sky-200 font-semibold" : ""
                        }`
                    }
                >

                    📄 Take Mock

                </NavLink>

                <NavLink
                    to="/dashboard/history"
                    className={({ isActive }) =>
                        `block p-3 rounded hover:bg-sky-200 ${
                            isActive ? "bg-sky-200 font-semibold" : ""
                        }`
                    }
                >

                    📚 History

                </NavLink>

            </nav>

            <div className="p-4 border-t border-sky-200">

                <button
                    onClick={logout}
                    className="w-full bg-red-600 text-white rounded p-3 hover:bg-red-700"
                >

                    Logout

                </button>

            </div>

        </div>

    );

}

export default Sidebar;
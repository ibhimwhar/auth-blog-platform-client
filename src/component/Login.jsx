import { useState } from "react";
import { api } from "../api";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router";


const Login = ({ setToken, onRegister, showpassword, setShowPassword }) => {
    const [data, setData] = useState({
        username: "",
        password: "",
        msg: "",
    });

    const navigate = useNavigate();

    const handleLogin = async () => {
        const res = await api.post("/api/login", {
            username: data.username,
            password: data.password
        });

        if (res.data.token) {
            setToken(res.data.token);
            localStorage.setItem("authToken", res.data.token);
            navigate("/dashboard")
        } else {
            setData({ ...data, msg: res.data.error });
        }
    };

    return (
        <div className="w-full md:w-64 sm:h-74 flex flex-col gap-5">
            <input
                type="text"
                placeholder="Username"
                className="outline-none p-2 bg-transparent transition-colors border-b focus:border-b-2 focus:border-neutral-400 border-neutral-500 placeholder:text-white placeholder:text-sm"
                value={data.username}
                onChange={(event) => setData({ ...data, username: event.target.value })}
                onKeyDown={(event) => event.key === "Enter" && handleLogin()}
            />

            <div
                className="p-2 transition-colors flex justify-between items-center border-b focus:border-b-2 focus:border-neutral-400 border-neutral-500"
            >
                <input
                    className="w-full outline-none bg-transparent placeholder:text-white placeholder:text-sm"
                    type={showpassword ? "text" : "password"}
                    placeholder="Password"
                    value={data.password}
                    onChange={(event) => setData({ ...data, password: event.target.value })}
                    onKeyDown={(event) => event.key === "Enter" && handleLogin()}
                />
                <button
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="border border-white/10 transition-all hover:bg-white/5 active:bg-white/5 text-white p-2 rounded-lg"
                >
                    {showpassword ? <IoEye size={18} /> : <IoEyeOff size={18} />}
                </button>
            </div>

            <button
                onClick={handleLogin}
                className="mt-5 border border-white/10 transition-all hover:bg-white/5 active:bg-white/5 text-white p-2 rounded-lg"
            >
                Login
            </button>

            {data.msg && <p className="text-sm text-neutral-400">{data.msg}.</p>}
            <button
                onClick={() => onRegister(true)}
                className="w-fit text-sm hover:underline underline-offset-2">
                Don't have an account?
            </button>
        </div>
    );
};

export default Login;
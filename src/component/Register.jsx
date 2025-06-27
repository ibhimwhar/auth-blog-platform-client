import { useState } from "react";
import { api } from "../api";
import { IoEye, IoEyeOff } from "react-icons/io5";


const Register = ({ onRegister, showpassword, setShowPassword }) => {
    const [data, setData] = useState({
        username: "",
        password: "",
        msg: "",
    });

    const handleRegister = async () => {
        const res = await api.post("/api/register", {
            username: data.username,
            password: data.password
        });
        setData({ ...data, msg: res.data.error || "Registered Successfully" });
    };

    return (
        <div className="w-full md:w-64 sm:h-74 flex flex-col gap-5">
            <input
                type="text"
                placeholder="Username"
                className="outline-none p-2 bg-transparent transition-colors border-b focus:border-b-2 focus:border-neutral-400 border-neutral-500 placeholder:text-white placeholder:text-sm"
                value={data.username}
                onChange={(event) => setData({ ...data, username: event.target.value })}
                onKeyDown={(event) => event.key === "Enter" && handleRegister()}
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
                    onKeyDown={(event) => event.key === "Enter" && handleRegister()}
                />
                <button
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="border border-white/10 transition-all hover:bg-white/5 active:bg-white/5 text-white p-2 rounded-lg"
                >
                    {showpassword ? <IoEye size={18} /> : <IoEyeOff size={18} />}
                </button>
            </div>

            <button
                onClick={handleRegister}
                className="mt-5 border border-white/10 transition-all hover:bg-white/5 active:bg-white/5 text-white p-2 rounded-lg"
            >
                Register
            </button>
            {data.msg && <p className="text-sm text-neutral-400">{data.msg}.</p>}
            <button
                onClick={() => onRegister(false)}
                className="w-fit text-sm hover:underline underline-offset-2">
                Have an account.
            </button>
        </div>
    );
};

export default Register;
import { useValueContext } from "../component/Context";
import Login from "../component/Login";
import Register from "../component/Register";
import Vid from "../assets/12421216_3840_2160_30fps.mp4";
import Img from "../assets/180120267-removebg-preview.png"
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

const AuthSystem = () => {
    const { setToken } = useValueContext();
    const [register, setRegister] = useState(false);
    const [showpassword, setShowPassword] = useState(false);


    return (
        <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-600">
            <div className="flex flex-col md:flex-row overflow-hidden m-3 shadow-lg">

                {/* Video Section */}
                <div className="relative rounded-t-md md:rounded-l-md md:rounded-tr-none overflow-hidden">
                    <img
                        src={Img}
                        alt="Developer"
                        className="absolute top-3 right-3 w-12 h-12 object-cover animate-pulse"
                    />

                    <video
                        src={Vid}
                        loop
                        muted
                        autoPlay
                        className="md:w-[80vh] h-full object-cover"
                    />

                    <div className="absolute bottom-0 p-3 flex gap-3">
                        <a
                            href="https://github.com/ibhimwhar"
                            target="_blank"
                            className="border border-white/10 transition-all hover:bg-white/5 text-white p-2 rounded-lg"
                        >
                            <FaGithub size={18} />
                        </a>

                        <a
                            href="https://x.com/ibhimwhar"
                            target="_blank"
                            className="border border-white/10 transition-all hover:bg-white/5 text-white p-2 rounded-lg"
                        >
                            <FaXTwitter size={18} />
                        </a>
                    </div>

                </div>

                {/* Form Section */}
                <div className="relative p-6 rounded-b md:rounded-r md:rounded-bl-none bg-neutral-800/40 text-white flex flex-col gap-4 justify-center">
                    <h1 className="text-2xl sm:text-4xl font-bold mb-4">{register ? "Sign In" : "Log In"}</h1>
                    {register ? <Register
                        showpassword={showpassword}
                        setShowPassword={setShowPassword}
                        onRegister={setRegister}
                    /> : <Login
                        setToken={setToken}
                        showpassword={showpassword}
                        setShowPassword={setShowPassword}
                        onRegister={setRegister}
                    />}
                    <p className="absolute bottom-0 right-0 p-3 text-[13px] text-neutral-400">{register ? 1 + 1 : 1}/2</p>
                </div>

            </div>
        </main>
    );
};

export default AuthSystem;
import { TbSunHigh, TbMoon, TbSunMoon, TbMenu } from "react-icons/tb";
import { useValueContext } from "./Context";
import { FaXTwitter, FaGithub } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Header = ({ openmenu, setOpenMenu, onRef }) => {
    const { mode, setMode } = useValueContext();

    const menus = [
        { name: 'light', icon: <TbSunHigh size={20} />, action: () => setMode("light") },
        { name: 'dark', icon: <TbMoon size={20} />, action: () => setMode("dark") },
        { name: 'system', icon: <TbSunMoon size={20} />, action: () => setMode("system") },
    ]

    return (
        <header className="z-50 backdrop-blur-md border-b border-gray-100 dark:border-white/10 p-4 fixed w-full flex justify-between items-center bg-white/80 dark:bg-slate-950/80">

            <h1 className="text-2xl md:text-3xl font-semibold">Blog Poster</h1>

            <div>
                <nav className="flex gap-2">
                    <a
                        href="https://github.com/ibhimwhar"
                        target="_blank"
                        className="border border-gray-100 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-all dark:text-white p-2 rounded-lg"
                    >
                        <FaGithub size={18} />
                    </a>

                    <a
                        href="https://x.com/ibhimwhar"
                        target="_blank"
                        className="border border-gray-100 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-all dark:text-white p-2 rounded-lg"
                    >
                        <FaXTwitter size={18} />
                    </a>

                    <button
                        onClick={() => setOpenMenu(!openmenu)}
                        className="border border-gray-100 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-all dark:text-white p-2 rounded-lg"
                    >
                        {openmenu ? <IoClose size={18} /> : <TbMenu size={18} />}
                    </button>
                </nav>

                <div className={`mt-4 p-5 absolute right-0 transition-transform duration-300 ${openmenu ? "translate-x-0" : "translate-x-full"}`}>
                    <div
                        ref={onRef}
                        className={`text-black dark:text-white bg-white/80 dark:bg-slate-950 border border-gray-100 dark:border-white/10 rounded-lg overflow-hidden `}
                    >
                        {menus.map((item, indx) => (
                            <button
                                key={indx}
                                onClick={() => item.action()}
                                className="capitalize flex gap-2 items-center p-4 w-[25vh] transition-all hover:bg-gray-50 dark:hover:bg-white/5"
                            >
                                <span className={`transition-all ${mode === item.name.toLocaleLowerCase() ? "animate-pulse" : ""}`}>{item.icon}</span> {item.name}
                            </button>
                        ))}
                    </div>
                </div>

            </div>

        </header>
    );
};

export default Header;
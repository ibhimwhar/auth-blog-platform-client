import { FaGithub, FaXTwitter } from "react-icons/fa6"
import { LuUser } from "react-icons/lu"
import { useValueContext } from "./Context";
import { useNavigate } from "react-router";

const CreatePost = () => {
    const { addBlog, newblog, setNewBlog, setToken } = useValueContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        setToken("");
        navigate("/login");
    };

    return (
        <div className="grid gap-3 w-full md:w-96 h-fit">

            <div className="p-5 leading-relaxed border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 dark:text-white rounded-lg">
                <h1 className="text-2xl font-bold mb-6">Add New</h1>

                <div className="grid gap-4">
                    <input
                        type="text"
                        placeholder="Title"
                        value={newblog.title}
                        onChange={(e) => setNewBlog({ ...newblog, title: e.target.value })}
                        className="outline-none p-2 bg-transparent transition-colors border-b focus:border-b-2 border-gray-100 dark:border-white/10 dark:placeholder:text-white placeholder:text-sm"
                    />
                    <textarea
                        className="outline-none p-2 bg-transparent transition-colors border-b focus:border-b-2 border-gray-100 dark:border-white/10 dark:placeholder:text-white dark:placeholder:text-sm"
                        placeholder="Content"
                        value={newblog.content}
                        onChange={(e) => setNewBlog({ ...newblog, content: e.target.value })}
                        rows={4}
                    ></textarea>

                    <button
                        onClick={addBlog}
                        className="w-full mt-5 border border-white/10 transition-all hover:bg-white/5 active:bg-white/5 text-white p-2 rounded-lg"
                    >
                        Post Blog
                    </button>
                </div>
            </div>

            <nav className="flex gap-2 p-5 leading-relaxed border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 dark:text-white rounded-lg">
                <a
                    href="https://github.com/ibhimwhar"
                    target="_blank"
                    className="border group border-gray-100 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-all dark:text-white p-2 rounded-lg"
                >
                    <FaGithub size={18} />
                    <span
                        className="hidden group-hover:block absolute m-3 text-sm border border-gray-100 dark:border-white/10 bg-white text-black dark:bg-slate-950 transition-all dark:text-white p-2 rounded-lg"
                    >
                        Github
                    </span>
                </a>

                <a
                    href="https://x.com/ibhimwhar"
                    target="_blank"
                    className="border group border-gray-100 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-all dark:text-white p-2 rounded-lg"
                >
                    <FaXTwitter size={18} />
                    <span
                        className="hidden group-hover:block absolute m-3 text-sm border border-gray-100 dark:border-white/10 bg-white text-black dark:bg-slate-950 transition-all dark:text-white p-2 rounded-lg"
                    >
                        XTwitter
                    </span>
                </a>


                <button
                    onClick={handleLogout}
                    className="border group border-gray-100 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/5 transition-all dark:text-white p-2 rounded-lg"
                >
                    <LuUser size={18} />
                    <span
                        className="hidden group-hover:block absolute m-3 text-sm border border-gray-100 dark:border-white/10 bg-white text-black dark:bg-slate-950 transition-all dark:text-white p-2 rounded-lg"
                    >
                        Log out
                    </span>
                </button>


            </nav>

        </div>
    )
}

export default CreatePost
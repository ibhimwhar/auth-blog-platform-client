import { useEffect, useRef, useState } from "react";
import { api } from "../api";
import Header from "../component/Header";
import CreatePost from "../component/CreatePost";
import Posts from "../component/Posts";
import Footer from "../component/Footer";
import { useValueContext } from "../component/Context";
import Quote from "../component/Quote";

const Blog = ({ token }) => {
    const { blogs, fetchBlogs } = useValueContext();

    useEffect(() => {
        api.get("/dashboard", {
            headers: { Authorization: `Bearer ${token}` }
        })
            .catch(() => console.log("Unauthorized"));

        fetchBlogs();
    }, [token]);

    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="transition-colors bg-gray-50 text-black dark:bg-slate-950 dark:text-white">

            <Header openmenu={openMenu} setOpenMenu={setOpenMenu} onRef={menuRef} />

            <div className={`fixed bg-white/5 backdrop-blur-sm inset-0 transition-transform duration-300  ${openMenu ? "translate-x-0" : "translate-x-full"}`} />

            <main className="p-6 pt-[20vh] min-h-screen flex flex-col-reverse md:flex-row gap-8">

                {/* Blog Posts Section */}
                <div className="flex-1 overflow-auto max-h-[80vh] md:pr-3">
                    <Posts
                        blogs={blogs}
                    />
                    <Quote />
                </div>

                {/* Add Blog Section */}
                <CreatePost />

            </main>

            <p className="mb-4 p-6 text-center text-sm text-gray-500 max-w-3xl mx-auto">
                Welcome to our platform, a space designed for curious minds, ambitious creators, and those eager to share their voice. Here, ideas turn into projects, thoughts become discussions, and stories unfold with every new post. Whether you're a developer, a writer, or simply someone with something to say, your contributions matter.
                This isn't just a blog; it's a growing community where experiences, challenges, and lessons are exchanged openly. Dive into the latest articles, explore new perspectives, and don't hesitate to add your own voice to the conversation. We believe every story has value, and yours is no exception.
                Our mission is simple: provide a clean, distraction-free space for quality content. No unnecessary clutter, just authentic words from real people. So take your time, engage with others, and let's build something meaningful together.
            </p>


            <Footer />

        </div>
    );
};

export default Blog;
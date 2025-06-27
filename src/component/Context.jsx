import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../api";

export const KeyContext = createContext();

export const ContainerContext = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("authToken") || "");
    const [blogs, setBlogs] = useState([]);
    const [newblog, setNewBlog] = useState({ title: "", content: "" });

    const [mode, setMode] = useState(() => {
        return localStorage.getItem("Theme") || "system";
    });

    const isDark = mode === "dark" || (mode === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("Theme", mode);
    }, [mode, isDark]);


    const fetchBlogs = async () => {
        try {
            const res = await api.get("/blogs");
            setBlogs(res.data);
        } catch (err) {
            console.log("Failed to fetch blogs", err);
        }
    };

    const addBlog = async () => {
        if (!newblog.title.trim() || !newblog.content.trim()) return;

        try {
            await api.post("/blogs",
                { title: newblog.title, content: newblog.content },
                {
                    headers: { Authorization: `Bearer ${token}` }
                }
            );
            setNewBlog({ title: "", content: "" });
            fetchBlogs();
        } catch (err) {
            console.log("Failed to post blog", err);
        }
    };


    return (
        <KeyContext.Provider value={{
            token,
            setToken,
            mode,
            setMode,
            isDark,
            blogs,
            setBlogs,
            fetchBlogs,
            addBlog,
            newblog,
            setNewBlog,
        }}>
            {children}
        </KeyContext.Provider>
    );
};

export const useValueContext = () => useContext(KeyContext);
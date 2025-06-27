import { FaGithub, FaXTwitter } from "react-icons/fa6"

const Footer = () => {
    return (
        <footer className="backdrop-blur-md border-t border-gray-100 dark:border-white/10 p-4 bg-white/80 dark:bg-slate-950/80">

            <div className="flex justify-center items-center gap-4">

                {/* Left side */}
                <p className="text-sm text-gray-700 dark:text-gray-300">
                    &copy; {new Date().getFullYear()} <a href="https://github.com/ibhimwhar" className="hover:underline underline-offset-2">IBHIMWHAR</a>. All rights reserved.
                </p>

                {/* Right side */}
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
               

            </div>

        </footer>
    )
}

export default Footer
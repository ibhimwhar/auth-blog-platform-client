import { MdLinearScale } from "react-icons/md";

const Card = ({ b }) => {
    return (
        <div
            className="p-5 mb-6 leading-relaxed border border-gray-100 dark:border-white/10 bg-white dark:bg-white/5 transition-all dark:text-white rounded-lg"
        >
            <h4 className="font-bold">{b.title}</h4>
            <p>{b.content}</p>
            <p className="text-xs text-gray-400">{new Date(b.date).toLocaleString()}</p>
        </div>
    )
}

export default Card
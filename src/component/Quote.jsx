import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { quotes } from "../qoutes";

const Quote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const description = quotes[randomIndex].description;

    return (
        <>
            <h1 className="text-2xl font-bold mt-10 mb-4 text-center">Quote of the Day</h1>

            <div className="relative p-6 bg-white/70 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-lg shadow-md">

                <RiDoubleQuotesL size={40} className="absolute top-1 left-1 text-gray-300 dark:text-white/10" />

                        <p className="text-center text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            {description}
                        </p>

                <RiDoubleQuotesR size={40} className="absolute bottom-1 right-1 text-gray-300 dark:text-white/10" />
            </div>
        </>
    );
};

export default Quote;
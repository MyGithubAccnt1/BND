import { Link } from 'react-router-dom'
import './Notfound.css'
function Notfound() {
    return (
        <>
            <div class="h-[100dvh] w-[100dvw] flex flex-col justify-center items-center text-center">
                <div class="error before:dark:bg-[#121212]! after:dark:bg-[#121212]! text-[#5a5c69] text-[7rem] relative line-height-[1] w-[12.5rem] mx-auto!" data-text="404">404</div>
                <p class="text-[1.25rem] font-bold line-height-[1.5] text-gray-800 mb-5! dark:text-white">Page Not Found</p>
                <p class="text-gray-500">It looks like you found a glitch in the matrix...</p>
                <Link to="/"
                class="rounded-full py-1! w-[35%] mt-2! cursor-pointer border transition-all duration-300
                text-white bg-red-500 hover:text-red-500 hover:bg-transparent
                dark:text-red-500 dark:bg-transparent dark:hover:text-white dark:hover:bg-red-500 dark:border-red-500">&larr; Back to Home</Link>
            </div>
        </>
    )
  }
  
export default Notfound
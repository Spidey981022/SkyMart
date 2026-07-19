import { ArrowRight } from 'lucide-react';

function Banner(){
    return (
        <div className='w-screen flex justify-center mt-10'>
            <div className='banner-container border border-gray-600 rounded-4xl w-[75%] h-[300px] p-8'>
                <div className="day-display "><p>GOOD EVENING</p></div>
                <div className="greeting">
                    <h1>Welcome back,<br/> <span className='name'>Tarun!</span></h1>
                </div>
                <div className="description">
                    <p>Discover today's picks — hand-curated products across electronics, fashion, and more.</p>
                </div>
                <div className="buttons">
                    <button>Shop now <ArrowRight /> </button>
                    <button>View All Products</button>
                </div>
            </div>
        </div>
    )
}
export default Banner;
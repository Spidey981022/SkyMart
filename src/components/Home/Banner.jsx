import { ArrowRight, Package, TrendingUp, Star, Tag } from 'lucide-react';

function Banner(){
    return (
        <div className='w-full flex flex-col items-center mt-10'>
            <div className='banner-container bg-[#111111] border border-white rounded-4xl w-[75%] h-[350px] p-8 flex justify-between'>
                <div className='flex flex-col gap-5 w-[50%]'>
                    <div className="day-display text-[#89B005] text-sm"><p>GOOD EVENING 👋</p></div>
                    <div className="greeting text-6xl font-bold font-syne">
                        <h1>Welcome back,<br/> <span className='name text-[#C8F400]'>Tarun!</span></h1>
                    </div>
                    <div className="description text-gray-500">
                        <p>Discover today's picks — hand-curated products across electronics, fashion, and more.</p>
                    </div>
                    <div className="buttons flex items-center gap-3">
                        <button className='bg-[#C8F400] p-2 border rounded-xl text-black flex justify-center gap-1 text-sm font-semibold w-[130px]'>Shop now <ArrowRight/> </button>
                        <button className='bg-transparent p-2 border border-gray-700 rounded-xl flex justify-center gap-1 text-sm w-[130px]'>View All Products</button>
                    </div>
                </div>
                <div className="flex flex-col justify-center gap-5">
                    <div className="availability flex flex-col items-center justify-center h-[90px] w-[150px] border border-[#62751b] rounded-xl text-sm bg-[#23280F]">
                        <h1 className='text-3xl font-bold text-[#C8F400]'>20+</h1>
                        <p className='text-sm text-gray-500'>Products Available</p>
                    </div>
                    <div className="free flex flex-col items-center justify-center h-[90px] w-[150px] border rounded-xl text-sm">
                        <h1 className='text-3xl font-bold'>Free</h1>
                        <p className='text-sm text-gray-500'>Delivery on ₹999+</p>
                    </div>
                </div>
            </div>
            <div className='cards bg-[#111111] w-[75%] h-[130px] flex justify-between mt-12'>
                <div className="box p-7 flex gap-4 border border-white h-full w-[23%] rounded-4xl">
                    <div className="icon bg-[#23280F] text-[#C8F400] flex items-center justify-center h-12 w-12 rounded-xl">
                        <Package />
                    </div>
                    <div className="content flex flex-col justify-between">
                        <h3><span className='cart-items text-3xl font-semibold'>0</span></h3>
                        <p className='text-sm text-gray-500'>Cart Items</p>
                        <p className='text-xs text-gray-600'>In your bag</p>
                    </div>
                </div>
                <div className="box p-7 flex gap-4 border border-white h-full w-[23%] rounded-4xl">
                    <div className="icon bg-[#151C28] text-[#60A5FA] flex items-center justify-center h-12 w-12 rounded-xl">
                        <TrendingUp />
                    </div>
                    <div className="content flex flex-col justify-between">
                        <h3><span className='cart-Value text-3xl font-semibold'>$0.00</span></h3>
                        <p className='text-sm text-gray-500'>Cart Value</p>
                        <p className='text-xs text-gray-600'>Ready to checkout</p>
                    </div>
                </div>
                <div className="box p-7 flex gap-4 border border-white h-full w-[23%] rounded-4xl">
                    <div className="icon bg-[#281F10] text-[#FBBF24] flex items-center justify-center h-12 w-12 rounded-xl">
                        <Star />
                    </div>
                    <div className="content flex flex-col justify-between">
                        <h3><span className='star-ratin text-3xl font-semibold'>5</span></h3>
                        <p className='text-sm text-gray-500'>Top Products</p>
                        <p className='text-xs text-gray-600'>Highly rated</p>
                    </div>
                </div>
                <div className="box p-7 flex gap-4 border border-white h-full w-[23%] rounded-4xl">
                    <div className="icon bg-[#201828] text-[#C084FC] flex items-center justify-center h-12 w-12 rounded-xl">
                        <Tag />
                    </div>
                    <div className="content flex flex-col justify-between">
                        <h3><span className='categories text-3xl font-semibold'>6</span></h3>
                        <p className='text-sm text-gray-500'>Categories</p>
                        <p className='text-xs text-gray-600'>To explore</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Banner;
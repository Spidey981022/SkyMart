import { ArrowRight } from 'lucide-react';
function GoToShop() {
    return (
        <div className="w-full h-[180px] mt-20 flex justify-center">
            <div className="shop-box w-[75%] border rounded-2xl border-[#2E350B] p-5 flex flex-col items-center justify-center gap-3">
                <h3 className='text-3xl font-semibold'>Ready to shop?</h3>
                <p className='text-gray-500 text-sm'>Explore thousands of products at unbeatable prices.</p>
                <div className="browse h-[90px] w-[250px] border rounded-2xl flex items-center justify-center bg-[#C7F300] text-black font-semibold">
                    <p className='flex gap-2 items-center justify-center text-md'>Browse Products <ArrowRight size='20'/></p>
                </div>
            </div>
        </div>
    );
}

export default GoToShop;
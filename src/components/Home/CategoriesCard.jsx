import { ArrowRight } from 'lucide-react';

function CategoriesCard() {
    return (
        <div className='w-full flex flex-col items-center mt-10'>
            <div className="title flex justify-between w-[75%]">
                <h3 className='text-2xl font-bold'>Shop by Category</h3>
                <p className='flex gap-2 items-center text-sm text-[#C8F400] cursor-pointer'>View All <ArrowRight className="size-4" /></p>
            </div>

            <div className="cards bg-[#111111] w-[75%] h-[130px] grid grid-cols-3">
                <div className="card flex gap-4 border border-white h-full w-[23%] rounded-4xl"></div>
                <div className="card flex gap-4 border border-white h-full w-[23%] rounded-4xl"></div>
                <div className="card flex gap-4 border border-white h-full w-[23%] rounded-4xl"></div>
                <div className="card flex gap-4 border border-white h-full w-[23%] rounded-4xl"></div>
                <div className="card flex gap-4 border border-white h-full w-[23%] rounded-4xl"></div>
                <div className="card flex gap-4 border border-white h-full w-[23%] rounded-4xl"></div>
            </div>
        </div>
    )
}
export default CategoriesCard;
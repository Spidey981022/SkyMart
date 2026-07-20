import { Package,Users,Star,Truck } from 'lucide-react';
function AboutCards() {
    return (
        <div className="w-full h-[140px] mt-5 flex justify-center">
            <div className="cards w-[75%] flex justify-between">
                <div className="card w-[23%] h-full border rounded-4xl bg-[#111111] p-5 flex flex-col items-center justify-center gap-2">
                    <Package className='text-[#C8F400]'/>
                    <h4 className='font-semibold text-2xl'>20K+</h4>
                    <p className='text-gray-500 text-sm'>Products</p>
                </div>
                <div className="card w-[23%] h-full border rounded-4xl bg-[#111111] p-5 flex flex-col items-center justify-center gap-2">
                    <Users className='text-[#C8F400]'/>
                    <h4 className='font-semibold text-2xl'>50K+</h4>
                    <p className='text-gray-500 text-sm'>Happy Customers</p>
                </div>
                <div className="card w-[23%] h-full border rounded-4xl bg-[#111111] p-5 flex flex-col items-center justify-center gap-2">
                    <Star className='text-[#C8F400]'/>
                    <h4 className='font-semibold text-2xl'>4.9</h4>
                    <p className='text-gray-500 text-sm'>Avg. Rating</p>
                </div>
                <div className="card w-[23%] h-full border rounded-4xl bg-[#111111] p-5 flex flex-col items-center justify-center gap-2">
                    <Truck className='text-[#C8F400]'/>
                    <h4 className='font-semibold text-2xl'>99%</h4>
                    <p className='text-gray-500 text-sm'>On-time Delivery</p>
                </div>
            </div>
        </div>
    );
}

export default AboutCards;
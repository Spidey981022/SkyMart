import { Zap, Shield, Tag } from 'lucide-react';

function Footer() {
    return (
        <div>
        <div className='w-full mt-10 flex justify-center'>
            <div className="cards w-[75%] flex justify-between">
                <div className="card border rounded-2xl w-[32%] flex items-center p-5 gap-3 bg-[#111111]">
                    <div className="icon text-[#C8F400]"><Zap/></div>
                    <div className="description">
                        <h4 className='font-semibold'>Fast Delivery</h4>
                        <p className='text-sm text-gray-500'>Same-day on select items</p>
                    </div>
                </div>
                <div className="card border rounded-2xl w-[32%] flex items-center p-5 gap-3 bg-[#111111]">
                    <div className="icon text-[#60A5FA]"><Shield /></div>
                    <div className="description">
                        <h4 className='font-semibold'>Secure Payments</h4>
                        <p className='text-sm text-gray-500'>100% encrypted checkout</p>
                    </div>
                </div>
                <div className="card border rounded-2xl w-[32%] flex items-center p-5 gap-3 bg-[#111111]">
                    <div className="icon text-[#49DB7E]"><Tag/></div>
                    <div className="description">
                        <h4 className='font-semibold'>Best Prices</h4>
                        <p className='text-sm text-gray-500'>Price-match guarantee</p>
                    </div>
                </div>
            </div>
        </div>

            <div className='mt-30 border-t p-5'>
                <div className="flex justify-center flex-col items-center">
                    <h4 className='text-[#C8F400] text-xl'>SkyMart</h4>
                    <p className='text-sm text-gray-500'>© 2025 SkyMart | Built with React + Tailwind</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
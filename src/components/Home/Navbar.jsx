import { Zap, ShoppingCart, LogOut, UserRound } from 'lucide-react';

function Navbar() {
    return (
        <div className="flex items-center justify-around p-5 w-full bg-transparent text-sm sticky">
            <div className="logo flex gap-1 font-syne font-extrabold">
                <Zap className='bg-[#C8F400] text-black rounded p-0.5'/>
                <h1>Sky<span className= 'text-[#C8F400]'>Mart</span></h1>
            </div>
            <div className="menu">
                <ul className="flex w-[200px] justify-between">
                    <li className= 'text-[#C8F400]'>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="credentials flex items-center justify-between w-[200px]">
                <div className="profile flex items-center justify-evenly gap-1 border border-gray-600 rounded h-[35px] w-[90px] bg-[#191919]">
                    <UserRound className='bg-[#C8F400] text-black rounded p-0.5'/>
                    <p>Tarun</p>
                </div>
                <div className="cart"><ShoppingCart /></div>
                <div className="logout"><LogOut /></div>
            </div>
        </div>
    )
}
export default Navbar;
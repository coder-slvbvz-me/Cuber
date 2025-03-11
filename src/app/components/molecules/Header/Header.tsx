import React from 'react';
type Props = {
    title:string;
    name:string;
}
const Header = (props:Props) => {
    const {title,name} = props;
    return (
        <div className="header p-4 flex flex-row   w-[95.4vw] border-b-2 border-[#E6E6E6] items-center justify-between">
            <div className="flex flex-row items-center">
           <h4 className="uppercase text-3xl text-[#1C274C] font-bold">Cuber</h4>
             <div className="mx-2 h-[30px] border-[1px] border-l-[#1C274C] opacity-20"></div>
            <h5 className="text-[18px] text-gray-500 ">{title}</h5>
            </div>
            <div className="flex flex-row items-center">
                <div className="mx-2 h-[30px] border-[1px] border-l-[#1C274C] opacity-20"></div>
                <h5 className="text-[18px] text-gray-500 ">Welcome! <span className=" text-black">{name}</span></h5>
                <div className="mx-2 h-[30px] border-[1px] border-l-[#1C274C] opacity-20"></div>
            </div>
        </div>
    );
};

export default Header;
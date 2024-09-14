import { RiReactjsLine } from "react-icons/ri";
import { RiHtml5Fill } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import {SiDjango } from "react-icons/si";

const Techonologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl"> Techonologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounder-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>    
            </div>     
            <div className="rounder-2xl border-4 border-neutral-800 p-4">
                <RiHtml5Fill className="text-7xl text-orange-400"/>    
            </div>          
            <div className="rounder-2xl border-4 border-neutral-800 p-4">
                <RiJavascriptLine className="text-7xl text-yellow-400"/>    
            </div>     
            <div className="rounder-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-400"/>    
            </div>     
            <div className="rounder-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>    
            </div>     
            <div className="rounder-2xl border-4 border-neutral-800 p-4">
                <SiDjango className="text-7xl text-sky-700"/>    
            </div>     
            <div className="rounder-2xl border-4 border-neutral-800 p-4">
                <SiPython className="text-7xl text-cyan-300"/>    
            </div>     
        </div>
    </div>
  );
};

export default Techonologies
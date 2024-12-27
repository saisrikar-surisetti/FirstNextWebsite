import Image from "next/image";
import Link from "next/link";
export default function New() {
  return (<div>
< h1 className="text-center font-bold"> 
    My Contacts!
  </h1>
  <span className="flex justify-center "><Link  className="flex-1" href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ'}> 
  <button className="flex-1"> <label className="swap flex-1 swap-flip text-9xl">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />

  <div className="swap-on"><img src="gmail5.png" className="w-13"/></div>
  <div className="swap-off"><img src="gmail5.png"/></div>
</label></button>
  </Link>
  
<button className="flex-1"> <label className="swap swap-flip flex-1 text-9xl">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />

  <div className="swap-on"><img src="git2.png" className="w-50 "/></div>
  <div className="swap-off"><img src="git2.png" className="w-50"/></div>
</label></button>
<button className="flex-1"> <label className="swap swap-flip text-9xl">
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />

  <div className="swap-on"><img src="linkedin2.png" className=" w-13 h-13" /></div>
  <div className="swap-off"><img src="linkedin2.png" className=" w-13 h-13" /></div>
</label></button>
</span>
  </div>
  
  );
}
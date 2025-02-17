import {Targs} from "../constants"
const Targ = () => {
  return (
    <div className="border-b border-neutral-800 pb-4"> 
        <h2 className="my-20 text-center text-4xl">Targets</h2>
        <div>
            {Targs.map((Targ,index) =>(
                <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <p className="mb-2 text-sm text-neutral-400">{Targ.year}</p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold"  >
                            {Targ.role} - <span className="text-sm text-purple-200">
                                {Targ.Source}
                            </span>
                            </h6>
                            <p className="mb-4 text-neutral-400">{Targ.description}</p>
                    </div>
                        
                </div>
            )) }
        </div>
    
    </div>
  )
}

export default Targ
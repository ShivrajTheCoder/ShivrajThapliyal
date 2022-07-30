import React from 'react'
import pdata from "../data.js"
export default function ProjectScreen() {
    return (
        <div >
            {pdata.projects.map((proj) => (
                <div key={proj._id} className={(proj._id % 2 !== 0) ? "flex place-content-evenly  font-mono p-3 bg-slate-300" :
                    "flex place-content-evenly flex-row-reverse  font-mono bg-slate-200 p-3"}>
                    <hr />
                    <div ><div className='text-xl underline m-3'><strong>{proj.title}</strong></div>
                    <img className='h-64' src={proj.image} alt={proj.title} />
                    </div>
                    
                    <div>
                        {proj.description.map((x) => (
                            <div key={x}>*{x}</div>
                        ))}
                    </div>
                    <div>
                        <strong>Technologies Used:</strong>
                        {
                            proj.technology.map((x) => (
                                <div key={x}>-{x}</div>
                            ))
                        }
                    </div>
                    <hr />
                </div>

            )
            )}
        </div>
    )
}

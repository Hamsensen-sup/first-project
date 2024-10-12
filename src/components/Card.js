import React from 'react'

export default function Card(){
    return(
        <div className="card-container">
            <div className="card">
                <img src="/images/katie-zaferes.png" alt="" className="person-img"/>
                <div className="ratings">
                    <img src="/images/star.png" alt=""/>
                    <p>5.0</p>
                    <p>(30)</p>
                    <p>• USA</p>
                </div>
                <div className="title">
                    <p>Life lessons with Katie Zaferes</p>
                    <p><b>From $250</b>/person</p>
                </div>
            </div>
            <div className="card">
                <img src="/images/katie-zaferes.png" alt="" className="person-img"/>
                <div className="ratings">
                    <img src="/images/star.png" alt=""/>
                    <p>5.0</p>
                    <p>(30)</p>
                    <p>• USA</p>
                </div>
                <div className="title">
                    <p>Life lessons with Katie Zaferes</p>
                    <p><b>From $250</b>/person</p>
                </div>
            </div>
        </div>
    )
}

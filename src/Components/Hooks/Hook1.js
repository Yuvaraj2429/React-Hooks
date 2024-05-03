import React, { useState } from "react"

const HookOne = () => {
    const [counter, setCounter] = useState(20)

    const one = () => {
        setCounter(counter + 10)
    }
    const two = () => {
        setCounter(counter - 1)
    }


    return (
        <div className="App">
            <div className="Container mt-4 text-center">
                <div className="row">
                    <div className="col-lg-12">
                        <h3>React useState() Example</h3>
                        <h2>{counter}</h2>
                        <button className="btn-btn-dnager btn-lg me-3" onClick={one}>
                            Click to + By 10
                        </button>
                        <button className="btn-btn-dnager btn-lg me-3" onClick={two}>
                            Click to - By 1
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );
};
export default HookOne;

const element = (
//   Write your code here.
    <div className = "container-fluid bg pt-5 pb-5">
        <div className = "row">
            <div className = "col">
                <div className = "d-flex flex-column justify-content-center text-center m-auto">
                    <h1 className = "heading">Super Over League</h1>
                    <div className="d-flex flex-row justify-content-center">
                        <img src = "https://assets.ccbp.in/frontend/react-js/rcb-img.png" className="w-25" />
                        <img src = "https://assets.ccbp.in/frontend/react-js/csk-img.png" className= "w-25" />
                    </div>
                </div>
            </div>
        </div>
    </div>

)

ReactDOM.render(element, document.getElementById('root'))


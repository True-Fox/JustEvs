

class Test extends React.Component{
    render(){
        return(
            <div className = "container">
                <div className = "row mt-5">
                <div className = "col">
                <Cards name = "ABC" image = "https://media.zigcdn.com/media/model/2022/Jul/450x-right-side-view_930x620.jpg"/>
                </div>
                <div className = "col">
                <Cards name = "DEF" image = "https://media.zigcdn.com/media/model/2022/Sep/beast-png-right-side-view_930x620.png"/>
                </div>
                <div className = "col">
                <Cards name = "GHI" image = "https://www.mahindraelectric.com/images/treo2.0/Treo-3-quarter-new.jpg?v=123"/>
                </div>
                </div>
                <div className = "row mt-5">
                <div className = "col">
                <Cards name = "ABC" image = "https://media.zigcdn.com/media/model/2022/Jul/450x-right-side-view_930x620.jpg"/>
                </div>
                <div className = "col">
                <Cards name = "DEF" image = "https://media.zigcdn.com/media/model/2022/Sep/beast-png-right-side-view_930x620.png"/>
                </div>
                <div className = "col">
                <Cards name = "GHI" image = "https://www.mahindraelectric.com/images/treo2.0/Treo-3-quarter-new.jpg?v=123"/>
                </div>
                </div>
            </div>
            
        )
    }
}
var style = {color : "black"}
class Cards extends React.Component{
    render()
    {
        return(
            <div className = "card">
                <div className = "card-header">
                  <h1 style = {style}>{this.props.name}</h1>
                </div>
                <div className = "card-body">
                    <img src = {this.props.image} className = "card-img-top"/>
                </div>
                <div className = "card-footer">
                    <p>Details about vehicle {this.props.name}</p>
                </div>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render
    (
    <Test/>
    )
import data from "../layout/Data";
import Card from "../layout/Card";

function Context(){
    return(
        <>
         <div className="container yash my-5">
        <div className="row">
            {
                data.map((ele)=>{
                    return(
                        <div className="col-lg-4">
                            <Card title={ele.title} para={ele.para} image={ele.image}></Card>
                        </div>
                    )
                   
                })
            }
        </div>

    </div>
        </>
    )
}

export default Context
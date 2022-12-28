import React from 'react';
import CatChild from './CatChild';
import Frankie from './assets/bird 1'
import Fluffy from './assets/fluffy.jpg'


class Parent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            totalNumOfTunas : 20
        }
    }


    decrementTotalNumOfTunas = () => {
        this.setState({
            totalNumOfTunas : this.state.totalNumOfTunas-1
        })
    }

    render(){
        return(
            <>
                <h1>Parent</h1>
                <h2>Total Number Of Tunas : {this.state.totalNumOfTunas}</h2>
                <CatChild 
                    name='Frankie'
                    imgPath={Frankie}
                    decremnt={this.decrementTotalNumOfTunas}

                />
                <CatChild 
                    name='Fluffy'
                    imgPath={Fluffy}
                    decremnt={this.decrementTotalNumOfTunas}
                />
            </>
        )
    }
}

export default Parent;
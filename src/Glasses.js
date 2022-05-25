import React, { Component } from 'react'
import style from './Glasses.module.css'
import data from './data.json'


export default class Glasses extends Component {
    state={
        glasses:{
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    };
    selectGlasses = (Glasses)=>{
        this.setState({
            glasses: Glasses,
        })
    };
    renderGlasses =() =>{
        return data.map((item, index) => {
            return <img onClick={()=>{ 
                this.selectGlasses(item) }} 
                className="ml-3 p-3 border border-width-1" 
                style={{ width: '100px' }} 
                key={index} src={item.url} />
        })
    };

    render() {
        return (
            <div className={style.main} >
            <div className={style.bg}>
                <h1>TRY GLASSES APP ONLINE </h1>
                    <div className="container">
                        <div className="row mt-5 text-center">
                            <div className="col-6">
                                <div className="item position-relative">
                                    <img className={`${style.model} ${style.gglasses}`}  />
                                    <img className={style.img}src={this.state.glasses.url} />
                                    <div className={style.info}>
                                        <h2 className={style.text}> {this.state.glasses.name}</h2>
                                        <p className={style.content}>{this.state.glasses.desc}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img className={style.model} />
                            </div>
                        </div>
                    </div>
                    <div className="bg-light container text-center mt-5 p-5">
                        {this.renderGlasses()}
                    </div>
                </div>
            </div >
        )
    }
}

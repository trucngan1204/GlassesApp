// import React, { Component } from 'react'
// import data from "../data/data.json";
// import style from "./Glasses.module.css";
// export default class Glasses extends Component {
//     state={
//         glasses:{
//             "id": 7,
//             "price": 80,
//             "name": "FENDI F8750",
//             "url": "./glassesImage/v7.png",
//             "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
//         }
//     };
//     selectGlasses = (newGlasses)=>{
//         this.setState({
//             glasses: newGlasses,
//         })
//     };
//     renderList =() =>{
//         return data.map((glassesItem, index) => {
//             return <img onClick={()=>{ this.selectGlasses(glassesItem) }} className="ml-3 p-3 border border-width-1" style={{ width: '110px', cursor: 'pointer' }} key={index} src={glassesItem.url} />
//         })
//     };

//     render() {
//         return (
//             <div className={style.glass} >
//                 <div className={style.bg}>
//                     <h3 className={style.text}>TRY GLASSES APP ONLINE </h3>
//                     <div className="container">
//                         <div className="row mt-5 text-center">
//                             <div className="col-6">
//                                 <div className="position-relative">
//                                     <img className={`${style.model} ${style.styleGlasses}`}  />
//                                     <img className={style.imgGlasses}src={this.state.glasses.url} />
//                                     <div className={style.infoGlasses}>
//                                         <span className={style.span1}>{this.state.glasses.name}</span> 
//                                         <br />
//                                         <span className={style.span2}>{this.state.glasses.desc}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="col-6">
//                                 <img className={style.model} />
//                             </div>
//                         </div>
//                     </div>
//                     <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
//                         {this.renderList()}
//                     </div>
//                 </div>
//             </div >
//         )
//     }
// }
import React, { Component } from 'react'
import data from "../data/data.json";
import style from "./Glasses.module.css";
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
                style={{ width: '100px', cursor: 'pointer' }} 
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
                                    <img className={`${style.model} ${style.styleGlasses}`}  />
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


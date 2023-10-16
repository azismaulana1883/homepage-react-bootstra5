import React from 'react';
import Article1Img from '../../assets/img/Article1.png';
import Article2Img from '../../assets/img/Article2.png';
import Article3Img from '../../assets/img/Article3.png';

function Hero_content() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center pb-5 pt-5">
                        <h6>Latest Article</h6>
                    </div>
                </div>
            </div>
            <div className="container-fluid h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    <div className="col-auto pb-5">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={Article1Img} className="card-img-top" alt="Article 1"/>
                            <div className="card-body">
                                <h5 className="card-title">Artikel 1</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto pb-5">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={Article2Img} className="card-img-top" alt="Article 2"/>
                            <div className="card-body">
                                <h5 className="card-title">Artikel 2</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto pb-5">
                        <div className="card" style={{width: "18rem"}}>
                            <img src={Article3Img} className="card-img-top" alt="Article 3"/>
                            <div className="card-body">
                                <h5 className="card-title">Artikel 3</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero_content;

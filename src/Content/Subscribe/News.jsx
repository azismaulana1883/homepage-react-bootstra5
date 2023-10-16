function News ()
{
    return (
        <>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1 className="title-subscribe"></h1>
                            <span className="sign-up">Sign to our newsletters</span>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Input your Email here"/>
                              </div>
                            <button type="button" className="btn btn-light">Light</button>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default News
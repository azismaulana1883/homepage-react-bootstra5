import React from 'react';
import AboutImg from '../../assets/img/Article1.png'

function About ()
{
    return (
        <>
            <div className="container-fluid pt-5 pb-5">
                    <div className="row">
                        <div className="col-sm-6 image-about">
                            <img src={AboutImg} alt="Description of the Image" className="img-fluid"/>
                        </div>
                        <div className="col-sm-6 text-about">
                            <h2>About Us</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, impedit repellendus! Tenetur velit sequi eos aperiam fuga saepe. Magnam reiciendis cum laboriosam odio autem delectus ratione quaerat voluptatibus ad repellat eius temporibus sunt doloremque nisi inventore nulla quos, voluptas itaque dolore neque mollitia dolor sit. Officia recusandae debitis quas aliquid vitae eaque. Voluptate nesciunt, sapiente tempore officiis sit, esse odio quae voluptates, provident nihil dicta sed voluptatem quidem. Perferendis labore provident aliquid, quisquam nulla quod, nobis ipsum fugiat tempore consequuntur aliquam repellendus, ducimus rerum? Ipsum quo magnam sit perferendis ex debitis, corrupti id, sed alias, ratione distinctio repellat inventore dolores?</p>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default About
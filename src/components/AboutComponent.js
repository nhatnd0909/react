import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LEADERS } from '../shared/leaders';

const Aboutus = () => {
    const lead = LEADERS.map((leader) => (
        <div>
            <div className="row about_us" key={leader.id}>
                <div className='col-2'>
                    <img src={leader.image} alt="" />
                </div>
                <div className="col-10">
                    <h3>{leader.name}</h3>
                    <p>{leader.designation}</p>
                    <p>{leader.description}</p>

                </div>
            </div>
        </div>
    ))
    return (
        <div className='container'>
            {lead}
        </div>
    )

}


function About() {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>
            </div>
            <div className='row'>
                <div class="col-12 col-sm-6 col-md-6">
                    <h2>Our History</h2>
                    <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele
                        in Hong Kong. Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.
                    </p>
                    <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>

                </div>
                <div class="col-12 col-sm-6 col-md-6">
                    <div class="card">
                        <h3 class="card-header bg-primary text-white">Facts At a Glance</h3>
                        <div class="card-body">
                            <dl class="row">
                                <dt class="col-6">Started</dt>
                                <dd class="col-6">3 Feb. 2013</dd>
                                <dt class="col-6">Major Stake Holder</dt>
                                <dd class="col-6">HK Fine Foods Inc.</dd>
                                <dt class="col-6">Last Year's Turnover</dt>
                                <dd class="col-6">$1,250,375</dd>
                                <dt class="col-6">Employees</dt>
                                <dd class="col-6">40</dd>
                            </dl>
                        </div>
                    </div>
                </div>
                <div class="col-12">
                    <div class="card card-body bg-light ">
                        <blockquote class="blockquote">
                            <p class="mb-0">You better cut the pizza in four pieces because I'm not hungry enough to eat six.</p>
                            <footer class="blockquote-footer">Yogi Berra,
                                <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                                    P. Pepe, Diversion Books, 2014</cite>
                            </footer>
                        </blockquote>
                    </div>
                </div>
            </div>
            <hr />

            <div className='row'>
                <h1 style={{ marginTop: '80px' }}>Corporate Leadership</h1>
                <Aboutus />
            </div>
        </div>
    )
}

export default About;

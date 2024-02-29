import React from 'react'

import ProfilePic from '../Assets/john-doe-image.png';
import { AiFillStar } from 'react-icons/ai';

const Testimonial = () => {
    return (
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>Testimonial</p>
                <h1 className='primary-heading'>What They Are Saying</h1>                                                                      
                <p className='primary-text'>
                Lorem Ipsum text is often used as placeholder text in web development to fill in content areas before the actual content is available.
                </p>
            </div>
            <div className='testimonial-section-bottom'>
                <img src={ProfilePic} alt='' />
                <p>
                Lorem Ipsum text is often used as placeholder text in web development to fill in content areas before the actual content is available.
                </p>
                <div className='testimonials-stars-container'>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>Jhon De</h2>
            </div>
        </div>
    )
}

export default Testimonial;
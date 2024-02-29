import React from 'react'

import PickMeals from '../Assets/pick-meals-image.png';
import ChooseMeals from '../Assets/choose-image.png';
import DeliveryMeals from '../Assets/delivery-image.png';

const Work = () => {
    const workInfoData = [
        {
            image: PickMeals,
            title: 'Pick Meals',
            text: 'Lorem Ipsum text is often used as placeholder text in web development to fill in content areas before the actual content is available.',
        },
        {
            image: ChooseMeals,
            title: 'Choose How Often',
            text: 'Lorem Ipsum text is often used as areas before the actual content is available.',                                                                                              
        },
        {
            image: DeliveryMeals,
            title: 'Fast Deliveries',
            text: 'Lorem Ipsum text is areas before the actual content is available.',
        },
    ]

    return (
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>Work</p>                                                             
                <h1 className='primary-subheading'>How It Works</h1>
                <p className='prrimary-text'>
                Lorem Ipsum text is often used as placeholder text in web development 
                to fill in content areas before the actual content is available.
                </p>
            </div>
            <div className='work-section-bottom'>
                {
                    workInfoData.map((data) => (
                        <div className='work-section-info'>
                            <div className='info-boxes-img-container'>
                                <img src={data.image} alt='' />
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Work
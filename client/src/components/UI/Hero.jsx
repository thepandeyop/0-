import React from 'react';
import '../../styles/Hero.css';
import logomain from '../images/mainblack.gif';
const Hero = () => {
  return <section className='hero__section'>
    <div className='container'>
  <div className='hero__wrapper'>

    <div className='hero__content'>

 <div>
 <h2> We're Creating Perfect</h2>
  <h2> online content </h2>
  <h2 className='highlight'> with you always</h2>
 </div>
<p className='description'>site is for only those who want to create their self perfect</p>
<div className='hero__btns'>

<button className='primary__btn'> Get Started Now</button>

<button className='Secondary__btn'>Discover More</button>

</div>
</div>

    <div className='hero__img'></div>
    <img src={logomain} alt=''/>
  </div>
    </div>
  </section>
}

export default Hero
import React from 'react';
import ArrowTop from './../../../assets/imgs/svg/arrow-top.svg';

export default () => (
    <div className='about-wrapper' id='about-content'>
      <div className='about-content-wrapper'>
        <div className='about-title-wrapper'>
          <h1>ABOUT</h1>
        </div>
        <div> 
          <p className='about-text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus feugiat in ante metus dictum at tempor commodo. Cursus risus at ultrices mi tempus imperdiet nulla. Laoreet id donec ultrices tincidunt arcu. Mus mauris vitae ultricies leo. Dictum at tempor commodo ullamcorper a lacus. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Vulputate eu scelerisque felis imperdiet proin.
          </p>
          <p className='about-text'>
            Netus et malesuada fames ac turpis egestas integer eget aliquet. Arcu felis bibendum ut tristique et egestas quis ipsum suspendisse. Feugiat nibh sed pulvinar proin. Sed velit dignissim sodales ut eu. Sem et tortor consequat id porta nibh. In ornare quam viverra orci sagittis eu volutpat. Quis varius quam quisque id diam vel. Ut tristique et egestas quis ipsum suspendisse. Sed enim ut sem viverra aliquet eget sit.
          </p>
        </div>
      </div>
      
      <img className='arrow-top' src={ArrowTop} />
    </div>
);
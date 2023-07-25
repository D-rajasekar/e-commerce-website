import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

const MyCarousel =()=>{
<br/>
    const slides = [
        {
          url: 'https://iasetraining.org/wp-content/uploads/2021/09/Top-home-appliances-training-center.jpg',
        },
        {
          url: 'https://cdn.pixabay.com/photo/2014/05/05/10/39/stove-338139_960_720.jpg',
        },
        {
          url: 'https://images.pexels.com/photos/213162/pexels-photo-213162.jpeg?cs=srgb&dl=pexels-photomix-company-213162.jpg&fm=jpg',
        },
    
        {
          url: 'https://cdn.pixabay.com/photo/2017/02/21/07/59/kitchen-2084994_960_720.jpg',
        },
        {
          url: 'https://cdn.pixabay.com/photo/2020/10/04/01/07/house-5624887_960_720.jpg',
        },
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
      useEffect(()=>{
        const timer=setTimeout(()=>{
          if(currentIndex===4){
            setCurrentIndex(0)
          }else{
            setCurrentIndex(currentIndex+1)
          }
        },5000)
        return()=>clearTimeout(timer)
      },[currentIndex])
      const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      };
    
      const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      };
    
      const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
      };
    
      return (
        
        <div className='max-w-5/12 h-[580px] w-full px-0  relative group ' data-carousel="slide" data-te-carousel-init
        data-te-carousel-slide>
          
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className='w-full h-full  bg-center bg-cover duration-500'
          ></div>
          {/* Left Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className='text-2xl cursor-pointer'
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      );
    }
    

  
export default MyCarousel;
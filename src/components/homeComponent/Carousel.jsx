import React from 'react';
import {Link} from 'react-router'

const Carousel = () => {
  return (
    <div className="carousel w-10/12  mt-6 mx-auto h-[400px]  md:h-[480px] ml-10  md:ml-20 rounded-xl overflow-hidden">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="sl1.jpeg"
          className="w-full object-cover"
          alt="Slide 1"
        />
        <div className="absolute left-24 right-14 top-1/3 text-white">
          <h1 className="text-xl font-semibold mb-4 text-white">
            Discover your next challenge. <br /> Find and register for a wide range of sporting events, <br /> from marathons to local tournaments.
          </h1>
          <Link to="events" className="btn rounded-2xl px-8 bg-blue-700 text-white border-blue-700">See All Events</Link>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="sl2.jpg"
          className="w-full object-cover"
          alt="Slide 2"
        />
        <div className="absolute left-24 right-14 top-1/3 text-white">
          <h1 className="text-xl font-semibold mb-4 text-white">
            Compete and connect with fellow athletes. <br /> AthlecticHub is your platform to engage <br /> with the sports community.
          </h1>
          <Link to="events" className="btn rounded-2xl px-8 bg-blue-700 text-white border-blue-700">See All Events</Link>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="slide.jpg"
          className="w-full object-cover"
          alt="Slide 3"
        />
        <div className="absolute left-24 right-14 top-1/3 text-white">
          <h1 className="text-xl font-semibold mb-4 text-white">
            Track your progress, achieve your goals. <br /> Access event results, rankings, and personal bests <br /> all in one place on AthleticHub.
          </h1>
          <Link to="events" className="btn rounded-2xl px-8 bg-blue-700 text-white border-blue-700">See All Events</Link>
        </div>
        <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>

    </div>
  );
};

export default Carousel;
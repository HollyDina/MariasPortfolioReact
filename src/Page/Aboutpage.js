import React from 'react';
import Homeworkcardsection from '../components/Home/Homeworkcardsection';
import About from '../components/About/Aboutme';
import { Images } from '../components/ImageMedium';
import { WorkSection } from '../components/About/WorkSection';


function AboutPage({ data }) {

  return (

    <div className="main-content">
      <About />
      <Homeworkcardsection data={data}></Homeworkcardsection>

    </div>
  )
}

export default AboutPage;


// Section.js
import React from 'react';
import { WorkSection } from '../About/WorkSection';

const Section = React.forwardRef(({ id,}, ref) => {
  return (
    <section id={id} ref={ref} className="reveal">
   <WorkSection/>
    </section>
  );
});

export default Section;

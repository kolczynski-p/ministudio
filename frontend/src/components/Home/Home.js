import React from "react";
import './Home.scss'
import ContentHeader from '../ContentHeader/ContentHeader.js';
import PreviewCardSliderWrapper from '../PreviewCardSliderWrapper/PreviewCardSliderWrapper.js';


function Home() {
  return (
    <section className='Home ContentPageSection'>
      <article>
        <ContentHeader text='About us' />
        <div className='Home-articleWrapper'>
          <p className='Home-aboutUsContent'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa perspiciatis, est incidunt doloremque accusamus quaerat pariatur illo sit nam odio doloribus voluptatibus obcaecati assumenda deserunt libero odit modi molestias illum sequi natus animi voluptates! Eveniet aperiam et minima! Molestiae, beatae!</p>

        </div>
      </article>
      <article>

        <ContentHeader text='Our works' />
        <PreviewCardSliderWrapper />
      </article>

      <article>
        <ContentHeader text='Contact' />
        <div className='Home-articleWrapper'>
          <h3>placeholder@example.com</h3>
        </div>
      </article>

    </section>


  );
}

export default Home;

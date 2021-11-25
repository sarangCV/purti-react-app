import React from 'react';
import Carousel from 'react-elastic-carousel';
import GalleryCard from '../../components/project-gallery';
import Navbar from '../../components/navbar';
// importing images
import gallery_one from '../../assets/project-gallery/1.jpg';
import gallery_two from '../../assets/project-gallery/3.jpg'
import gallery_three from '../../assets/project-gallery/4.png'
import gallery_four from '../../assets/project-gallery/5.jpg'
import gallery_five from '../../assets/project-gallery/6.jpg'

import walkthrough_one from '../../assets/project-walkthrough/1.mp4'
import walkthrough_two from '../../assets/project-walkthrough/2.mp4'
import walkthrough_three from '../../assets/project-walkthrough/3.mp4'

import './style.css';
import WalkthroughCard from '../../components/project-walkthrough';

const ProjectWalkthrough = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 1, itemsToScroll: 1 },
        { width: 768, itemsToShow: 1, itemsToScroll: 1 },
        { width: 1200, itemsToShow: 1, itemsToScroll: 1}
      ];

    return (
        <>
            <Navbar title="PROJECT WALKTHROUGH"/>
            <div className="container-sec">
                <div className="border-sec">
                    {/* <video src={walkthrough} width="70%" height="50%" controls="controls" autoplay="true" /> */}
                    <div className="dashboard-carousel dashboard-carousel-gallery">
                            <Carousel breakPoints={breakPoints}>
                                <WalkthroughCard video={walkthrough_one}/>
                                <WalkthroughCard video={walkthrough_two}/>
                                <WalkthroughCard video={walkthrough_three}/>
                            </Carousel>
                        </div>
                </div>
            </div>
        </>
    )
}

export default ProjectWalkthrough;

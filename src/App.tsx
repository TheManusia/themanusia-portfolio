import React, {useState} from "react";
import {About} from "./components/About";
import {Skill} from "./components/Skill";
import {Education} from "./components/Education";
import {Experience} from "./components/Experience";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";
import {ParallaxProvider} from "react-scroll-parallax";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Keyboard} from "swiper";

import "swiper/css";
import {Mousewheel, Pagination, Scrollbar} from "swiper";
import {Navbar} from "./components/Navbar";

function App() {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>();

    const goToPage = (index: number) => {
        thumbsSwiper?.slideTo(index, (1000 + (index * 100)), false);
    };

    function handleSlideChangeTransitionEnd(swiper: SwiperCore) {
        let acs = document.querySelectorAll(".swiper-slide-active")[0];
        let hasVerticalScrollbar = acs.scrollHeight > acs.clientHeight;

        if (hasVerticalScrollbar) {
            let scrollHeight = acs.scrollHeight;
            let slideSize = acs.clientHeight;
            let scrollDifferenceTop = scrollHeight - slideSize;

            acs.addEventListener("wheel", (e: any) => {
                let scrollTop = acs.scrollTop;
                let scrollDifference = scrollHeight - (scrollTop + slideSize);
                let delta;

                if (e.wheelDelta) {
                    delta = e.wheelDelta;
                } else {
                    delta = -1 * e.deltaY;
                }

                if (delta < 0) {
                    if (scrollDifference == 0) {
                        swiper.mousewheel.enable();
                    } else {
                        swiper.mousewheel.disable();
                    }
                } else if (delta > 0) {
                    if (scrollDifference == scrollDifferenceTop) {
                        swiper.mousewheel.enable();
                    } else {
                        swiper.mousewheel.disable();
                    }
                }
            })
        } else {
            swiper.mousewheel.enable();
        }
    }

    return (
        <ParallaxProvider>
            <div className="App">
                <Swiper
                    onSwiper={(swiper) => {
                        setThumbsSwiper(swiper);
                    }}
                    modules={[Pagination, Scrollbar, Mousewheel, Keyboard]}
                    slidesPerView={"auto"}
                    threshold={30}
                    spaceBetween={0}
                    keyboard={{
                        pageUpDown: true,
                        enabled: true,
                    }}
                    onSlideChangeTransitionEnd={handleSlideChangeTransitionEnd}
                    direction={"vertical"}
                    mousewheel={{releaseOnEdges: true, thresholdTime: 100, thresholdDelta: 15}}
                    observer={!0}
                    observeParents={!0}
                    className="mySwiper">
                    <SwiperSlide>
                        <div>
                            <Navbar goToPage={goToPage}/>
                            <About/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="overflow-auto"><Skill/></SwiperSlide>
                    <SwiperSlide><Education/></SwiperSlide>
                    <SwiperSlide><Experience/></SwiperSlide>
                    <SwiperSlide><Projects/></SwiperSlide>
                    <SwiperSlide><Contact/></SwiperSlide>
                    <SwiperSlide className="footer"><Footer/></SwiperSlide>
                </Swiper>
            </div>
        </ParallaxProvider>
    );
}

export default App;

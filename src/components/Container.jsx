import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import parkour from "../assets/img/parkour.jpg";
import zipline from "../assets/img/zipline.jpg";
import home from "../assets/img/home.jpg";

function Container() {
	return (
		<div 
			className="flex flex-col justify-center align-middle"
			data-aos="fade-up"
			data-aos-easing="linear"
			data-aos-duration="1500"
		>
			<Carousel className="h-full w-full" dynamicHeight>
				<div>
					<img
						src={parkour}
						alt="Parkour"
						className="h-full w-full object-cover"
					/>
				</div>
				<div>
					<img
						src={zipline}
						alt="Zipline"
						className="h-full w-full object-cover"
					/>
				</div>
				<div>
					<img
						src={home}
						alt="Home"
						className="h-full w-full object-cover"
					/>
				</div>
			</Carousel>
		</div>
	);
}

export default Container;
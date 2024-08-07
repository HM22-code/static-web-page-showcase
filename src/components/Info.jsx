import React from "react";
import zipline from "../assets/img/zipline.jpg";

function Info() {
	return (
		<div class="relative isolate overflow-hidden bg-white dark:bg-gray-900 px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div class="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div class="lg:pr-4">
                        <div class="lg:max-w-lg">
                            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">Lorem ipsum</h1>
                            <p class="mt-6 text-xl leading-8 text-gray-700 dark:text-gray-300">Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae feugiat egestas.</p>
                        </div>
                    </div>
                </div>
                <div class="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <img class="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src={zipline} alt="" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1500"/>
                </div>
                <div class="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div class="lg:pr-4">
                        <div class="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <p class="dark:text-gray-300">Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae sed turpis id.</p>
                            <ul role="list" class="mt-8 space-y-8 text-gray-600 dark:text-gray-300">
                                <li class="flex gap-x-3">
                                    <span><strong class="font-semibold text-gray-900 dark:text-white">Lorem ipsum</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.</span>
                                </li>
                                <li class="flex gap-x-3">
                                    <span><strong class="font-semibold text-gray-900 dark:text-white">Lorem ipsum</strong> Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.</span>
                                </li>
                                <li class="flex gap-x-3">
                                    <span><strong class="font-semibold dark:text-white">Lorem ipsum</strong> Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</span>
                                </li>
                            </ul>
                            <p class="mt-8 dark:text-gray-300">Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.</p>
                            <h2 class="mt-16 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Lorem ipsum</h2>
                            <p class="mt-6 dark:text-gray-300">Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis ipsum eu a sed convallis diam.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	);
}

export default Info;
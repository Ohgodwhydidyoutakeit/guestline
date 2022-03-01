import { createRef, FC, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


type TCarouselProps = {
    images: string[]
}

export const Carouselle: FC<TCarouselProps> = ({ images }: TCarouselProps) => {

    return (
        <>
            <div className="w-40 h-40 ">


                <Carousel showThumbs={false} showIndicators={false} showStatus={false} >
                    {images.map((el: any, ind: number) => {
                        return (

                            <div className="h-full h-max" key={ind}>
                                <img className="object-cover " src={el.url} key={ind} />
                            </div>

                        )
                    })}
                </Carousel>
            </div>

        </>
    )
}
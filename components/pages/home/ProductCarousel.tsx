import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
import { Text, useMediaQuery } from '../../../customUI';
import ProductCard from './productCard';
import { Products } from '../../../localdb';

import styles from '../../../styles/pages/home/productCarousel.module.sass'

interface ProductCaroselProps {
    titleSelector: string;
    totalSlides: number;
    mappingData: Products[];
}

const ProductCarousel: React.FC<ProductCaroselProps> = (props) => {

    const {
        titleSelector,
        totalSlides,
        mappingData,
    } = props

    const mediaMin1050 = useMediaQuery('(min-width: 1050px)')
    const mediaMin850 = useMediaQuery('(min-width: 850px)')
    const mediaMin650 = useMediaQuery('(min-width: 650px)')
    const mediaMin0 = useMediaQuery('(min-width: 0px)')

    const [visibleSlides, setVisibleSlides] = React.useState(2)

    React.useEffect(() => {
        if (mediaMin1050) {
            setVisibleSlides(5)
        }
        else if (mediaMin850) {
            setVisibleSlides(4)
        }
        else if (mediaMin650) {
            setVisibleSlides(3)
        }
        else if (mediaMin0) {
            setVisibleSlides(2)
        }
    }, [mediaMin1050, mediaMin850, mediaMin650, mediaMin0])

    return (
        <div className={styles.wrapper}>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={totalSlides}
                visibleSlides={visibleSlides}
                step={visibleSlides}
            >
                <div className={styles.carouselHeader}>
                    <Text variant="h6">{titleSelector}</Text>
                    {
                        visibleSlides < totalSlides && (
                            <div>
                                <ButtonBack className={styles.button}>Back</ButtonBack>
                                <ButtonNext className={styles.button}>Next</ButtonNext>
                            </div>
                        )
                    }
                </div>
                <Slider className={styles.slider}>
                    {
                        mappingData.map((data, index) => (
                            <Slide className={styles.slide} key={index} index={index}>
                                <ProductCard {...data} />
                            </Slide>
                        ))
                    }
                </Slider>
            </CarouselProvider>
        </div>
    )
}

export default React.memo(ProductCarousel)
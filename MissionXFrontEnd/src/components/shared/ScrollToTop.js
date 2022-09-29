import { useRef } from 'react'
import { InView } from 'react-intersection-observer'
import styles from '../styles/ScrollToTop.module.css';
import LogIt from '../shared/LogIt'

const {scrollToTopBtn,showBtn }= styles;

const ScrollToTop = () => {

    
    const in_element  = useRef()
    const scrollRef = useRef()
    
    const handleToTop = () => {
        // Scroll back to the top of content
        LogIt('Scroll to ref:',scrollRef)
        scrollRef.current.scrollIntoView();
    };
    

    const handleInviewChange = (inView,ref, entry) => {
        LogIt('Show/Hide Back to top btn if false -> Navbar inView:', inView);
        in_element.current.className=(inView)?`${scrollToTopBtn}`:`${scrollToTopBtn} ${showBtn}`

    }

    return (
        <>
            <div ref={scrollRef}></div>
            <InView onChange={handleInviewChange}>
                {({ inView, ref, entry }) => (
                    <div ref={ref} />
                )}
            </InView>
            <button
                ref={in_element}
                onClick={handleToTop}
                type="button"
                className={`${scrollToTopBtn} ${showBtn}`}
                >BACK TO TOP</button>
                
                
        </>
    );

};
export default ScrollToTop

/* 

@Sebin/Melvin to help  

Problem referencing inView for button className change.  State was changing but button was not re-rendering to show inView change? Can I get the Inview context?

    className={inView?`${scrollToTopBtn}`:`${scrollToTopBtn} ${showBtn}`}
                >{`BACK TO TOP ${inView}`}</button>

Work around. Code feels a little ugly. 
    useRef for the button and change its class to make visible when inView changes to false.
    
    I wanted to use the inView ref for the scrollTo but could not get the context?
    Resolved by creating another ref for the onclick scrollto.  


*/ 
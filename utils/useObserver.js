export default function Observer(hiddenElements) {

    const options = {
        root: null,
        rootMargin: '0px 0px -5% 0px',
        threshold: 0.2
    }

    const obs = new IntersectionObserver(hiddenElements => {
        hiddenElements.forEach(el => {
            if(el.isIntersecting) {
                el.target.classList.add('en-pantalla')
            }
            else if(!el.isVisible && el.intersectionRatio <0.1) {
                el.target.classList.remove('en-pantalla')
            }
        })
    }, options)
    
    hiddenElements.forEach(el => obs.observe(el))
}
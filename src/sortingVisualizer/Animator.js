const animator = (animations) => {
    const bars = document.querySelectorAll('.bar')
    for (let i = 0; i < animations.length; i++) {
        const [bar, height, color] = animations[i]
        const barStyle = bars[bar].style
        setTimeout(() => {
            barStyle.backgroundColor = color
            barStyle.height = `${height}px`
        }, i)
    }
}

export default animator
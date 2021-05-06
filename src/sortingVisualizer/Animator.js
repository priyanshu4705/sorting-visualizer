const animator = (animations) => {
    const bars = document.querySelectorAll('.bar')
    for (let i = 0; i < animations.length; i++) {
        const isColorChange = i % 3 !== 2
        if (isColorChange) {
            const [leftBar, RightBar] = animations[i]
            const leftBarStyle = bars[leftBar].style
            const rightBarStyle = bars[RightBar].style
            const color = i % 3 === 0 ? 'teal' : 'red'
            setTimeout(() => {
                leftBarStyle.backgroundColor = color
                rightBarStyle.backgroundColor = color
            }, i)
        } else {
            const [leftBar, newHeight] = animations[i]
            const leftBarStyle = bars[leftBar].style
            setTimeout(() => {
                leftBarStyle.height = `${newHeight}px`
            }, i)
        }
    }
}

export default animator
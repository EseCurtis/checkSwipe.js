class checkSwipe {

	constructor(element, swipeNum, doLeft = () => {}, doRight = () => {}) {
		this.element = element
		this.swipeNum = swipeNum
		this.doLeft = doLeft
		this.doRight = doRight

		this.execute()
	}

	execute() {
		let touchstartX = 0
		let touchendX = 0
		let lastTouchesLength = 0
		let doLeft = this.doLeft
		let doRight = this.doRight

		function checkDirection(num) {

			if (touchendX < touchstartX) $(num, () => doLeft())
			if (touchendX > touchstartX) $(num, () => doRight())
		}

		this.element.addEventListener('touchstart', e => {
			lastTouchesLength = e.touches.length
			console.log(lastTouchesLength)
			if (lastTouchesLength !== this.swipeNum) return;
			touchstartX = e.changedTouches[0].screenX
		})

		this.element.addEventListener('touchend', e => {
			if (lastTouchesLength !== this.swipeNum) return;
			touchendX = e.changedTouches[0].screenX
			checkDirection(lastTouchesLength)
		})

		let called = false
		const $ = (num, func) => {
			if (num !== this.swipeNum) return 0
			if (called == false) return called = true

			func()
		}

	}

}

let cs = new checkSwipe(document, 2, ()=>alert('left'), ()=>alert('right'))
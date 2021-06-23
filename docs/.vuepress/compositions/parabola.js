import { ref } from '@vue/composition-api'

function getPosition(el) {
  return el.getBoundingClientRect()
}

export function useParabola({ speed = 38, autoStart = false, callback }) {
  const startRef = ref(null)
  const targetRef = ref(null)
  const runBallParabola = theBallRef => {
    const $ballEl = theBallRef.value
    const $targetEl = targetRef.value

    let p1, p2, a, b, c, rate, offset, x, y

    const init = () => {
      const { x: x1, y: y1, width: w1, height: h1 } = getPosition($ballEl)
      const { x: x2, y: y2, width: w2, height: h2 } = getPosition($targetEl)

      // 起點
      p1 = { x: x1 + w1 / 2, y: y1 + h1 / 2 + window.scrollY }

      // 終點
      p2 = { x: x2 + w2 / 2, y: y2 + h2 / 2 + window.scrollY }

      // 拋物線頂點
      const vertex = {
        x: (p1.x + p2.x) / 2,
        y: (p1.y + p2.y) / 2,
      }

      // 拋物線的 a, b, c
      a = (p2.y - vertex.y) / Math.pow(p2.x - vertex.x, 2)
      b = (p1.y - p2.y - a * (p1.x * p1.x - p2.x * p2.x)) / (p1.x - p2.x)
      c = p1.y - a * p1.x * p1.x - b * p1.x

      // 往左拋 or 往右拋
      rate = p1.x < p2.x ? 1 : -1

      // 因應速度的位移量
      offset = Math.abs(p2.x - p1.x) / speed

      // 初始化位置
      x = p1.x
    }

    const start = () => {
      window.requestAnimationFrame(step)
    }

    const step = () => {
      y = a * x * x + b * x + c

      $ballEl.style.top = `${y}px`
      $ballEl.style.left = `${x}px`

      x += offset * rate

      if ((rate > 0 && x > p2.x) || (rate < 0 && x < p2.x)) {
        $ballEl.remove()
        theBallRef.value = null
        if (callback) callback()
      } else {
        window.requestAnimationFrame(step)
      }
    }

    ;(function() {
      init()
      if (autoStart) {
        start()
      }
    })()
  }

  return {
    startRef,
    targetRef,
    runBallParabola,
  }
}

export function useBall(ballClassName) {
  const isAnimationRunning = ref(false)
  const ball = ref(null)

  // const { icon: iconClass } = this.group.type;

  const addBall = baseRef => {
    ball.value = document.createElement('span')
    const _ball = ball.value
    _ball.classList.add(ballClassName)
    _ball.id = 'ball'
    let ballRadius = 25

    const _baseRefDOM = baseRef.value

    let {
      x: x1,
      y: y1,
      width: w1,
      height: h1,
    } = _baseRefDOM.getBoundingClientRect()

    let startX = x1 + w1 / 2 - ballRadius
    let startY = y1 + h1 / 2 - ballRadius + window.scrollY

    Object.assign(_ball.style, {
      position: 'absolute',
      top: `${startY}px`,
      left: `${startX}px`,
      width: `${ballRadius * 2}px`,
      height: `${ballRadius * 2}px`,
      zIndex: '1',
      borderRadius: '50%',
      backgroundColor: '#4a4a4a',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: `25px`,
      lineHeight: '1',
    })
    document.body.appendChild(_ball)
  }

  return {
    isAnimationRunning,
    ball,
    addBall,
  }
}

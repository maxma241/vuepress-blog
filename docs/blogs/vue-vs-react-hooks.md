# Vue 3.0 Preview v.s. React hooks

前幾天端午假期有VueConf.

Evan Yu 大神說明了Vue 3.0目前開發進度  
[pdf](https://img.w3ctech.com/VueConf2019SH_Evan.pdf)

## Vue 3.0 Preview

新的`Function-based API`
~~class-based API~~

可以看一下寫起來的感覺

```js
function useMousePosition() {
  const x = value(0)
  const y = value(0)
  const update = e => {
    x.value = e.pageX
    y.value = e.pageY
  }
  onMounted(() => {
    window.addEventListener('mousemove', update)
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })
  return { x, y }
}

const Component = {
  setup() {
    const { x, y } = useMousePosition()
    return { x, y }
  },
  template: `<div>{{ x }} {{ y }}</div>`
}
```

尤雨溪大神當然是有講啟發自 [React Hooks](https://reactjs.org/docs/hooks-intro.html)

再來我們可以看一下上面的code用React Hooks寫會長怎樣

## React Hooks

```js
function useMousePosition() {
  const [ x, setX ] = useState(0);
  const [ y, setY ] = useState(0);

  function update(e) {
    setX(e.pageX);
    setY(e.pageY);
  };

  useEffect(() => {
    window.addEventListener('mousemove', update)
    return () => {
      window.removeEventListener('mousemove', update)
    }
  }, []);

  return { x, y }
}

function Component() {
  const { x, y } = useMousePosition();
  
  return (
    <div>{ x } { y }</div>
  );
}
```
## 心得
會發現其實兩個寫起來有點像
react維持了setState的感覺
讓使用useState都有個setter可以使用來改變state

而vue看來為了讓data reactivity
`value` function回傳的是一個封裝好的reactivity object
改值時，必須取xxx.value來assign，跟原來直接取的this.xxx來改值有點不一樣
會有點不直覺，這部分目前讓我覺得有點不舒服啊～
但畢竟是preview，在正式release之前會有什麼變化還不知道呢
目前vue 3.0看得到吃不到

希望3.0快點推出啊
vue目前的邏輯重用沒有一個好懂好寫的方式
scope一大，根本眼花撩亂

------
試玩了一下React Hooks
會發現React Hooks的`useEffect`真的很好用
可以做到debounce的效果
像這樣
```js
useEffect(() => {
    const query = useXXXX();
    async fetchData() {  /*....*/  }
    const handler = setTimeout(() => {
      fetchData(); // async function
    }, 300);
    return () => {
      clearTimeout(handler);
    }
}, [query]);
```
每一次query改變的話，都會去重新執行effect
因為有延遲300ms
所以如果query被綁在<input>上的話且一直輸入
timeout是會一直被clear掉的，而達到debounce的效果
在最後停止改變後+300ms才會真的去call fetchData()
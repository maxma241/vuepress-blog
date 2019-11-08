# vue-composition-api debounce demo

玩了vue composition api一段時間
(從原本vue function api正名成composition api 哈)

這次筆記講一下如何用composition api輕鬆做到input的debounce
之前比較無腦的方式就是直接用`lodash.debounce` 來達到debounce效果
但有了vue composition api也可以輕鬆做到debounce效果

原本玩的時候是直接寫在component的setup option上面
寫完直接拉成可共用的function

```js
import { ref, watch, isRef } from '@vue/composition-api';

export const useDebounceValue = (value, delay = 1000) => {
  const debounceValue = ref(isRef(value) ? value.value : value);
  const isLoading = ref(false);

  watch(value, (v, oldV, clean) => {
    isLoading.value = true;
    let theTimeout = setTimeout(() => {
      debounceValue.value = v;
      isLoading.value = false;
    }, delay);
    clean(() => {
      clearTimeout(theTimeout);
    });
  });
  return [debounceValue, isLoading];
};
```
watch這個function有提供一個callback來做clean的動作，這有點像react hooks的`useEffect`，只是`useEffect`只需要return一個function就好
可以看到我return Array，這樣做的原因是因為外層使用的時候，如果使用兩次以上，會比較好alias掉debounce後的value跟loading，多了這個loading，只是考慮到可能需要optimistic UI

外層使用的範例

template的部分
```html
<template>
<div>
  <div>
    <h3>vue-composition-api debounce test</h3>
    <div>
      <div><input type="text" v-model="keywords" /></div>
      <div>keywords: {{ keywords }}</div>
      <div v-if="!isLoading">keywordsForSearch: {{ keywordsForSearch }}</div>
      <div v-else>Loading...</div>
    </div>
  </div>
</div>
</template>
```
script的部分
```js
import { ref, watch, computed } from '@vue/composition-api'
import { useDebounceValue } from '../compositions/debounce'

export default {
  setup() {
    const keywords = ref('');
    const [debounceValue, isLoading] = useDebounceValue(keywords, 300);
    const keywordsForSearch = computed(() => debounceValue.value.split(' ').filter(v => v !== ''));
   
    return {
      keywords,
      keywordsForSearch,
      isLoading,
    }
  }
}
```

比較一下react hooks的debounce
clean的方式只需return一個function，但注意要寫觀察的對象是[value]，value有變化才需要再次useEffect

```js
import { useState, useEffect } from 'react';

export function useDebounce(value, delay) {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return debounceValue;
}
```

ok，這次murmur就到這邊
其實有了composition api，要優化UI/UX的話，會方便許多

------
目前在關注vue apollo作者對composition api的實作
有人問到作者[此issue](https://github.com/Akryum/vue-apollo/issues/687)
有人問可否發PR，但是作者說已經在實作中了XDDDD，其實我原本也想來加看看，但code review要時間啊～～～～
其實可以拿目前vue apollo已提供的api用vue composition api包一層起來
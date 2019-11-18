# vue-apollo composition api

作者說有在實作中，但還沒有release


這我大概寫的useQuery範例

還需要重構整理，讓他更乾淨，效能更好一點

```js
import { ref, watch, reactive, isRef } from "@vue/composition-api";

export function useQuery({ query, context, variables, skip }) {
  const resultData = ref({});
  const error = ref(null);
  const loading = ref(true);
  const varsRef = ref(variables);
  const skipRef = ref(isRef(skip) ? skip.value : skip);
  const q = (v) =>
    context.root.$apollo.query({
      query,
      fetchPolicy: "cache-and-network",
      variables: v
    });
  watch(
    [varsRef, skipRef],
    async ([v, skip], [ov, oldSkip], clean) => {
      console.log('vars: ', v);
      console.log('skip: ', skip);
      if (skip) {
        resultData.value = {};
        error.value = null;
        loading.value = false;
        return;
      }
      try {
        const { data, errors, loading: isLoading, networkStatus } = await q(v);
        console.log('networkStatus: ', networkStatus)
        console.log('data: ', data)
        loading.value = isLoading;
        resultData.value = data;
        if (errors) {
          error.value = errors;
        }
      } catch (error) {
        error.value = error;
        console.error(error);
      }
    },
    { lazy: true, deep: true }
  );
 
  return {
    data: resultData,
    error,
    loading,
    query: q,
    options: reactive({
      variables: varsRef,
      skip: skipRef,
    })
  };
}

```
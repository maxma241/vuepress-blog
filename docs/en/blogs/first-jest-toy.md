# [Test] 玩測試 - Jest


## Jest
murmur......
會挑Jest主要因為它環境設定起來舒服一點
不管在前端環境還是後端環境，都可以很輕鬆地寫測試
我的test code是用TypeScript寫的
所以還要另外設定Typescript的環境
就來看怎麼設定吧

## 環境設定
- 首先當然就是安裝啦～
```bash
npm i -D jest
```
- 然後在 `package.json`增加這段
```json
{
  "scripts": {
    "test": "jest"
  }
}
```
- 再來要設定Typescript的環境
官方教學是安裝`@babel/preset-typescript`
但我自己是使用[`ts-jest`](https://github.com/kulshekhar/ts-jest)
```bash
npm i -D @types/jest ts-jest
```
typescript本身需要安裝的package自己請先安裝好XD

- 最後就是設定jest的config啦～
可以建一個`jest.config.js`的設定檔
或是直接在`package.json`裡面設定jest環境參數
我自己是用`package.json`的方式
```json
{
  "jest": {
    "setupFiles": ["dotenv/config"],
    "preset": "ts-jest",
    "moduleNameMapper": {
      // 這邊主要是設定ts config的path mapping
    },
   "moduleFileExtensions":["js","ts"],
  }
}
```
到這邊基本的環境都設定完了，之後需要什麼再微調吧

## Test Code
Jest的測試碼不用像其他的測試套件在*.test.ts或*.test.js還要import, require其它套件
環境設定好
直接寫describe, test, beforeAll, beforeEach, afterAll, afterEach, expect, mock, .......
就是直接寫測試code啦，不用再import有的沒的

test code路徑我是放在\<rootDir\>/test/*.test.ts
(這路徑是參考很多open source的)

測試是個很深奧的領域
測試性質有分很多種
單元測試
整合測試
e2e測試...
單元測試的`單元`大小怎麼切
等等，我還沒有寫太多測試
但有寫測試會發現，程式架構會變得好很多
要測試的method的side effect會消失(有side effect會發現超難測)
非常的解耦，以OOP來講就是會用大量的DI，相依太高也非常的不好測試
FP的話，就是各種curry或是closure
精神就是不要在method裡面另外建立其他的物件工具，這樣會非常的難測試

以下放個非常簡單的測試code
```typescript
import { sum } from '.....';

describe('util 測試', () => {
    test('加法', () => {
       expect(sum(2,3)).toEqual(5);
    })
  });
```

之後有時間再來分享比較複雜的測試 (async/await, mock function, mock data.....)
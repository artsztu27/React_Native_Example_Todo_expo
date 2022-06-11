## 目錄結構

```
├── App.js            # App entry point
├── app.json          # CRNA / Expo 用到的config檔
├── babel.config.js   # babel config檔 babel-plugin-root-import babel-preset-expo
├── package.json      # npm dependencies
├── assets            # 放靜態資源
    ├── images        # 圖檔
├── src
    ├── api                # API function
        ├── api                #  API function (1 hr)
    ├── components         # 子畫面模組元件
        ├── Task               # 待辦事項清單 (1 hr)
    ├── navigation         # Tab 與 側邊欄 (2 hr)
        ├── StackNavigator     #
        ├── TabNavigator       # 下方Tab
        ├── DrawerNavigator    # 左方menu
    ├── pages                     # 主要頁面
        ├── TodoToday             # 今日待辦事項清單 (1 hr)
        ├── TodoHistory           # 待辦事項歷史清單串接api (3 hr)
```

Run on ios

npm run ios

Run on android

npm run android

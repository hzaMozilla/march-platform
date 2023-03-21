### 此文件为全局API，负责前端接入网络层

#### use callApi
1. action: 服务端api，根据前后台协商情况自定义传入
2. payload：传给后台的数据，默认入参为json格式，如需要formData需要在api文件中自己添加
3. customConfig： 支持自定义配置请求头，可以不传，不传则采用默认api配置
#### 4. 使用示例：
```  
import { callApi } from '@src/api/api/';

// 建议在组件挂载完成后再进行请求
onload(() => {
    callApi({ action: 'user', payload: {}, customConfig: {} }).then((res) => {
        // do something here
        console.log(res);
    }).catch((error) => {
       // do something here
       console.log(error);
    })
})

```  
/**
 * Dodo
 * 目前仅增加post请求api，后续增加其他请求方式
 * get
 * delete
 * update
 */

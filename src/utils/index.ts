export const RanderID = (str:String) => {
      // 获取当前时间戳（毫秒）
      const timestamp = Date.now();
    
      // 计算字符串的简单哈希值（这里使用的是简单的ASCII值求和）
      let hash = 0;
      for (let i = 0; i < str.length; i++) {
          hash += str.charCodeAt(i);
      }
      
      // 添加一些随机数以增加独特性
      const random = Math.floor(Math.random() * 1000);
      
      // 组合时间戳、哈希和随机数
      const combined = `${timestamp}-${hash}-${random}`;
      
      // 返回Base64编码的组合字符串
      return btoa(combined);
}


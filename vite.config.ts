import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      imports:["vue","vue-router","pinia"],
      resolvers: [  
        // 启用 ElementPlusResolver，用于自动导入 Element Plus 组件的 JS 部分  
        ElementPlusResolver(),   
      ], 
      dts:'src/auto-import.d.ts',    // 路径下自动生成文件夹存放全局指令
    }),
    // 自动注册组件，页面直接使用  
    Components({  
      dirs: ['src/components'],
      resolvers: [  
        // 使用 ElementPlusResolver 来自动注册 Element Plus 组件  
        ElementPlusResolver({  
          // 可选配置，例如：importStyle: 'sass'，如果你使用的是 sass 而不是默认的 css  
          // 注意：这里也负责处理组件的样式导入  
        }),  
      ],  
      dts: 'src/components.d.ts',
    }), 
  ],
  base: './',
  server: {             
    host: '0.0.0.0',	
    // port: 8080,      
    open: true
  },
  resolve:{   
    //别名配置，引用src路径下的东西可以通过@如：import Layout from '@/layout/index.vue'
    alias:[   
      {
        find:'@',
        replacement:resolve(__dirname,'src') 
      }
    ]
  }
})

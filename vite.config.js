import { defineConfig } from "vite";

export default({
    root:"./src",
    publicDir:"../public",
     base: "/furniture-store/",
     build: {
    outDir: "../dist", // 🔥 هذا يجعل vite يضع ملفات build في جذر المشروع
    emptyOutDir: true, // لحذف النسخ القديمة
  },
})
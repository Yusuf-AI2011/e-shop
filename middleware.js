export function middleware(request) {

}

import { NextResponse } from 'next/server';

// // ⚠️ Muhim: Funksiya nomi aynan "middleware" bo'lishi va export qilinishi shart!
// export function middleware(request) {
//   // 1. Cookie'dan tokenni olamiz
//   const token = request.cookies.get('token')?.value;

//   const { pathname } = request.nextUrl;

//   // 2. Agar foydalanuvchi /admin yo'nalishiga kirmoqchi bo'lsa va token bo'lmasa
//   if (pathname.startsWith('/admin') && !token) {
//     // Uni /login sahifasiga redirect (qaytadan yo'naltirish) qilamiz
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   // 3. Agar login qilgan bo'lsa va yana /login sahifasiga kirmoqchi bo'lsa
//   if (pathname === '/login' && token) {
//     // Uni /admin sahifasiga o'tkazib yuboramiz
//     return NextResponse.redirect(new URL('/admin', request.url));
//   }

//   return NextResponse.next();
// }

// // Qaysi sahifalarda middleware ishlashini belgilash (optimizatsiya uchun)
// export const config = {
//   matcher: ['/admin/:path*', '/login'],
// };
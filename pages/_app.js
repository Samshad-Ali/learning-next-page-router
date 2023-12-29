"use client";
import ContextWrapper from './Context.js'
import '@/styles/globals.css'
export default function App({ Component, pageProps }) {
  return<ContextWrapper>
   <Component {...pageProps} />
  </ContextWrapper>
}

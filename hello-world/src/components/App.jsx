import React from "react"
import { Link } from "gatsby"
import Hero from "./Hero/hero.jsx"
export default function Home() {
  return (
    <div style={{ color: `purple` }}>
      <Link to="/about/">About</Link>
      <Hero></Hero>
      <img src="https://source.unsplash.com/random/400x200" alt="" />

    </div>
  );
}
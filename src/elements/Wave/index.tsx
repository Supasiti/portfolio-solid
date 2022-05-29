import { styles } from "@/assets/styles"
import { Component } from "solid-js"
import { rootClass } from "./styles"



const Wave: Component = () => (
  <svg
    class={rootClass}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 280"
  >
    <path
      fill={styles.color.secondary.darker}
      opacity='1'
      d="M0,160L48,170.7C96,181,192,203,288,186.7C384,171,480,117,576,85.3C672,53,768,43,864,69.3C960,96,1056,160,1152,176C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
    ></path>
  </svg>
)

export default Wave
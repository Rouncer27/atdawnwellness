import React, { Component } from "react"
import MindBodySoul from "../../elelments/svgs/MindBodySoul"
import {
  TimelineMax,
  TweenMax,
  CSSPlugin,
  Power0,
  Power1,
  Elastic,
  AttrPlugin,
} from "gsap/all"
import ScrollMagic from "scrollmagic"
import animationGsap from "animation.gsap"
// Need this for tree shaking.
// eslint-disable-next-line
const plugins = [CSSPlugin, AttrPlugin, animationGsap]

const animateTheLetters = (timeLine, lettersArray, type) => {
  lettersArray.forEach((letter, index) => {
    if (!letter.path) {
      return
    }

    const rand = Math.random() * 0.5 + 0.25
    TweenMax.set(letter.path, { strokeDasharray: letter.length })
    timeLine.fromTo(
      letter.path,
      rand,
      { autoAlpha: 0, strokeDashoffset: letter.length, ease: Power0.easeNone },
      { autoAlpha: 1, strokeDashoffset: 0, ease: Power0.easeNone }
    )
  })
}

const makeTheArray = (a, aLen, b, bLen, c, cLen, d, dLen, e, eLen) => {
  const mindArray = [
    { path: a, length: aLen },
    { path: b, length: bLen },
    { path: c, length: cLen },
    { path: d, length: dLen },
    { path: e, length: eLen },
  ]
  return mindArray
}

const mindAnimate = (
  mindArray,
  iDot,
  mindPeriod,
  bodyArray,
  bodyPeriod,
  soulArray,
  soulPeriod
) => {
  // Start the timeline. //
  const timeLine = new TimelineMax()
  TweenMax.set(iDot, { autoAlpha: 0 })
  TweenMax.set(mindPeriod, { autoAlpha: 0 })
  TweenMax.set(bodyPeriod, { autoAlpha: 0 })
  TweenMax.set(soulPeriod, { autoAlpha: 0 })
  timeLine.add("mind")
  animateTheLetters(timeLine, mindArray, "mind")
  timeLine.to(iDot, 0.25, { autoAlpha: 1 })
  timeLine.to(mindPeriod, 0.25, { autoAlpha: 1 }, "+=0.25")
  timeLine.add("body")
  animateTheLetters(timeLine, bodyArray, "body")
  timeLine.to(bodyPeriod, 0.25, { autoAlpha: 1 })
  animateTheLetters(timeLine, soulArray, "soul")
  timeLine.to(soulPeriod, 0.25, { autoAlpha: 1 })
}

const getMindParts = mindWrap => {
  const m = mindWrap.querySelector(".mind__m path")
  const mLen = m.getTotalLength()
  const i = mindWrap.querySelectorAll(".mind__i path")[1]
  const iLen = i.getTotalLength()
  const n = mindWrap.querySelector(".mind__n path")
  const nLen = n.getTotalLength()
  const dPathOne = mindWrap.querySelectorAll(".mind__d path")[0]
  const dPathTwo = mindWrap.querySelectorAll(".mind__d path")[1]
  const dLenOne = dPathOne.getTotalLength()
  const dLenTwo = dPathTwo.getTotalLength()
  const mindArray = makeTheArray(
    m,
    mLen,
    i,
    iLen,
    n,
    nLen,
    dPathOne,
    dLenOne,
    dPathTwo,
    dLenTwo
  )
  return mindArray
}

const getBodyParts = bodyWrap => {
  const b = bodyWrap.querySelector(".body__b path")
  const bLen = b.getTotalLength()
  const o = bodyWrap.querySelector(".body__o path")
  const oLen = o.getTotalLength()
  const d1 = bodyWrap.querySelectorAll(".body__d path")[0]
  const d1Len = d1.getTotalLength()
  const d2 = bodyWrap.querySelectorAll(".body__d path")[1]
  const d2Len = d2.getTotalLength()
  const y = bodyWrap.querySelector(".body__y path")
  // const yLen = b.getTotalLength()
  const yLen = 315

  const bodyWrapper = makeTheArray(
    b,
    bLen,
    o,
    oLen,
    d1,
    d1Len,
    d2,
    d2Len,
    y,
    yLen
  )
  return bodyWrapper
}

const getSoulParts = soulWrap => {
  const s = soulWrap.querySelector(".soul__s path")
  const sLen = s.getTotalLength()
  const o = soulWrap.querySelector(".soul__o path")
  const oLen = o.getTotalLength()
  const u = soulWrap.querySelector(".soul__u path")
  const uLen = u.getTotalLength()
  const l = soulWrap.querySelector(".soul__l path")
  const lLen = l.getTotalLength()
  const soulArray = makeTheArray(s, sLen, o, oLen, u, uLen, l, lLen)
  return soulArray
}

const getAllParts = () => {
  const mindPeriod = document.querySelector(".periods__mind")
  const bodyPeriod = document.querySelector(".periods__body")
  const soulPeriod = document.querySelector(".periods__soul")
  const mindWrap = document.querySelector(".mind")
  const iDot = mindWrap.querySelectorAll(".mind__i path")[0]
  const MindArray = getMindParts(mindWrap)
  const bodyWrap = document.querySelector(".body")
  const bodyArray = getBodyParts(bodyWrap)
  const soulWrap = document.querySelector(".soul")
  const soulArray = getSoulParts(soulWrap)
  mindAnimate(
    MindArray,
    iDot,
    mindPeriod,
    bodyArray,
    bodyPeriod,
    soulArray,
    soulPeriod
  )
}

class SvgWritting extends Component {
  componentDidMount() {
    getAllParts()
  }

  componentDidUpdate() {
    getAllParts()
  }
  render() {
    return (
      <div>
        <MindBodySoul />
      </div>
    )
  }
}

export default SvgWritting

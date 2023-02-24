import { SVGElement } from '../SVGContainer'
import { PathElement } from '../SVGContainer/component'
import { linkW3OrgSVG } from '../SVGContainer/constants'
import { type SVGProps } from '../type'

export const Home = ({ fill, width, height, classname = '' }: SVGProps) => {
  const svg = SVGElement({
    fill,
    width,
    height,
    viewBox: '0 0 1280.000000 1206.000000',

    classname: `fill-black dark:fill-white ${classname}`,
  })

  const SvgG = document.createElementNS(linkW3OrgSVG, 'g')
  SvgG.setAttribute('transform', 'translate(0.000000,1206.000000) scale(0.100000,-0.100000)')
  svg.append(SvgG)

  const path1 = PathElement({
    d: `M5828 11600 c-282 -250 -1418 -1256 -2523 -2235 -1106 -978 -2165
  -1917 -2355 -2085 -190 -168 -460 -407 -600 -530 -140 -124 -276 -245 -302
  -270 l-48 -45 330 -370 c181 -203 336 -369 343 -369 8 1 603 521 1323 1156
  3778 3332 4388 3868 4395 3866 4 -2 470 -413 1036 -914 565 -501 1842 -1631
  2836 -2512 994 -881 1812 -1602 1817 -1602 5 0 12 5 15 10 5 8 11 7 21 -1 19
  -15 -10 -45 339 351 153 173 293 331 312 351 l34 36 -838 739 c-461 407 -1544
  1363 -2408 2124 -863 762 -1919 1693 -2347 2070 l-776 685 -45 0 -45 0 -514
  -455z`,
  })

  const path2 = PathElement({
    d: `M5707 9301 c-364 -322 -1370 -1213 -2235 -1979 l-1572 -1393 2 -2872
    3 -2872 22 -41 c12 -23 41 -58 64 -77 83 -72 -24 -67 1561 -67 l1428 0 2 1273
    c3 1266 3 1272 24 1317 26 58 76 108 134 134 45 21 52 21 1224 24 1304 3 1248
    5 1322 -60 52 -46 81 -97 93 -163 8 -40 11 -454 11 -1292 l0 -1233 1484 2
    1485 3 30 29 c17 16 45 63 63 105 l33 76 2 2860 2 2860 -2240 1975 c-1270
    1120 -2249 1976 -2260 1976 -13 1 -247 -200 -682 -585z`,
  })
  SvgG.append(path1, path2)

  svg.append(SvgG)

  return svg
}

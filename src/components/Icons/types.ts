import { type FillColor, type StrokeType } from 'variables/css'

export type SVGProps = {
  fill?: FillColor
  width?: number
  height?: number
  stroke?: StrokeType
  classname?: string
  viewBox?: string
}

export interface State {
  pitch?: string
  roll?: string
  yaw?: string
  tof?: string
  height?: string
  battery?: string
  barometer?: string
  time?: string
  speed?: Chords
  acceleration?: Chords
  temperature?: Temperature
}

export interface Chords {
  x?: string
  y?: string
  z?: string
}

export interface Temperature {
  low?: string | undefined
  high?: string | undefined
}

export interface ApiError {
  message: string
  status: string
  code: number
  endpoint: string
  timestamp: Date
}

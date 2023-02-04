export type ButtonColorType = 'primary' | 'alert' | 'success'

export const buttonClassesByColorType: Record<ButtonColorType, string> = {
  primary: 'bg-blue-500 hover:bg-blue-700 text-white',
  alert: 'bg-red-500 hover:bg-red-700 text-white',
  success: 'bg-green-500 hover:bg-green-700 text-white',
}

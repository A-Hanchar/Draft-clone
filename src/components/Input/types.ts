export type InputProps = {
  className?: string
  id?: string
  type?: 'email' | 'number' | 'password' | 'search' | 'submit' | 'text' | 'button' | 'hidden'
  placeholder?: string
} & (
  | {
      labelClassName?: string
      labelInnerText: string
    }
  | {
      labelInnerText?: undefined
    }
)

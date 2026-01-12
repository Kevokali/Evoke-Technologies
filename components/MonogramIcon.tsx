interface MonogramIconProps {
  letter: string
  gradient: string
  size?: 'sm' | 'md' | 'lg'
}

export default function MonogramIcon({ letter, gradient, size = 'md' }: MonogramIconProps) {
  const sizeClasses = {
    sm: 'w-10 h-10 text-lg',
    md: 'w-16 h-16 text-2xl',
    lg: 'w-20 h-20 text-3xl',
  }

  return (
    <div
      className={`${sizeClasses[size]} rounded-2xl ${gradient} flex items-center justify-center text-white font-bold shadow-lg`}
    >
      {letter}
    </div>
  )
}

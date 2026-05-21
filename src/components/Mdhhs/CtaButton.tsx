import Link from 'next/link'

type Variant = 'primary' | 'inverse' | 'pill'

type Props = {
  href?: string
  label?: string
  variant?: Variant
}

export function CtaButton({
  href = '/mdhhs#mdhhs-contact',
  label = 'Check Your Eligibility',
  variant = 'primary',
}: Props) {
  if (variant === 'inverse') {
    return (
      <Link
        href={href}
        className="group inline-flex items-center gap-2 rounded-full bg-white text-[#73a9d9] px-8 py-4 text-base font-semibold transition-all hover:shadow-xl hover:shadow-black/10 hover:scale-[1.02]"
      >
        {label}
        <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
      </Link>
    )
  }

  if (variant === 'pill') {
    return (
      <Link
        href={href}
        className="group inline-flex items-center gap-2 rounded-full bg-[#73a9d9] text-white pl-7 pr-5 py-3.5 text-base font-semibold transition-all hover:bg-[#5a93c4] hover:shadow-lg hover:shadow-[#73a9d9]/25 hover:scale-[1.02]"
      >
        {label}
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/20 transition-transform group-hover:translate-x-0.5">
          &rarr;
        </span>
      </Link>
    )
  }

  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 rounded-full bg-[#73a9d9] text-white px-8 py-4 text-base font-semibold transition-all hover:bg-[#5a93c4] hover:shadow-lg hover:shadow-[#73a9d9]/25 hover:scale-[1.02]"
    >
      {label}
      <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
    </Link>
  )
}

type Props = {
  aspect?: string
  label?: string
}

export function ImagePlaceholder({
  aspect = 'aspect-[4/3]',
  label = 'Image Placeholder',
}: Props) {
  return (
    <div
      className={`${aspect} w-full rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center`}
    >
      <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-400">{label}</span>
    </div>
  )
}

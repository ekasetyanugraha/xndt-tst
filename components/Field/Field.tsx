interface Props {
  label?: string;
  children: any;
}

export default function Field({
  label,
  children,
}: Props) {
  return (
    <div className="field">
      {
        label && <label className="label">{label}</label>
      }
      <div className="control">
        {children}
      </div>
    </div>
  )
}

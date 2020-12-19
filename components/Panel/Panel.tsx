type Color =
  'primary'
  | 'link'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger';

interface Props {
  color?: Color;
  title?: string;
  children: any;
}

export default function Panel({
  color = 'primary',
  title,
  children,
}: Props) {
  return (
    <div className={`panel is-${color}`}>
      {
        title && <p className="panel-heading">{title}</p>
      }

      <div className="p-4">
        {children}
      </div>
    </div>
  )
}

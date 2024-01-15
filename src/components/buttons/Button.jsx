export default function Button({
  mode = "filled",
  children,
  Icon,
  ...btnOptions
}) {
  return (
    <button
      type="button"
      className={
        Icon ? `${mode}-button button icon-button` : `${mode}-button button`
      }
      {...btnOptions}
    >
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}

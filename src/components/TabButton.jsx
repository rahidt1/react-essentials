// ...props -> {onclick()=>}
export function TabButton({ children, isSelected, ...props }) {
  return (
    <button className={isSelected ? "active" : ""} {...props}>
      {children}
    </button>
  );
}

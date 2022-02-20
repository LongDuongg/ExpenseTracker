
export const bindInput = ({value, onChange}) => ({
  value: value || "",
  onChange: (e) => onChange(e.target.value),
});

export const bindNumberInput = ({value, onChange}) => ({
  value: value == null ? "" : value,
  onChange: (e) => onChange(e.target.value === "" ? null : +e.target.value),
});

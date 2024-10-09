
export default function FormInput({ label, ...rest }: any) {
  return (
    <div>
      <label>{label}</label>
      <input {...rest} />
    </div>
  );
}

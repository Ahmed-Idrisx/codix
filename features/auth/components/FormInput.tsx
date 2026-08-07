type FormInputProps = {
  label: string;
  type: string;
};

export function FormInput({ label, type }: FormInputProps) {
  return (
    <div className="flex flex-col gap-3">
      <label className="font-semibold">{label}</label>

      <input
        type={type}
        className="w-full rounded-full border border-zinc-300 px-4 py-2 outline-none focus:border-blue-600"
      />
    </div>
  );
}

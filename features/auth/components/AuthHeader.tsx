type AuthHeaderProps = {
  title: string;
  description?: string;
};

const AuthHeader = ({ title, description }: AuthHeaderProps) => {
  return (
    <div className="mb-8 flex flex-col items-center gap-3">
      <h1 className="text-center text-xl font-bold text-blue-800">{title}</h1>

      {description && (
        <p className="max-w-75 text-center text-sm leading-7 text-zinc-500">
          {description}
        </p>
      )}
    </div>
  );
};

export default AuthHeader;

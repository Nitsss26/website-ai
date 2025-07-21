interface ProgressBarProps {
  value: number;
  color?: string; // optional color override (e.g., "bg-green-500")
}

export const ProgressBar = ({ value, color = "bg-white" }: ProgressBarProps) => {
  return (
    <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
      <div
        className={`h-full transition-all duration-300 ease-in-out ${color}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};

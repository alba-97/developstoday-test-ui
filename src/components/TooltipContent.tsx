interface PayloadItem {
  payload: {
    year: number;
  };
  value: number;
}

interface TooltipContentProps {
  active?: boolean;
  payload?: PayloadItem[];
}

const TooltipContent = ({ active, payload }: TooltipContentProps) => {
  if (active && payload?.length) {
    return (
      <div className="bg-background border border-border p-2 rounded shadow">
        <p className="font-semibold">{`Year: ${payload[0].payload.year}`}</p>
        <p>{`Population: ${payload[0].value?.toLocaleString()}`}</p>
      </div>
    );
  }
  return null;
};

export default TooltipContent;

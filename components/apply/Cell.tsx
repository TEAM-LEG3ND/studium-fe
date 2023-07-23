import styles from "@/styles/components/TimeTable.module.sass";

type CellProps = {
  label: string;
  selected: boolean;
  point: [number, number];
  handleMouseDown: (point: [number, number], selected: boolean) => void;
  handleMouseEnter: (point: [number, number]) => void;
  handleMouseUp: (point: [number, number]) => void;
};

// on, off state
// on trigger event: mousedown,
function Cell({
  label,
  selected,
  point,
  handleMouseDown,
  handleMouseEnter,
  handleMouseUp,
}: CellProps) {
  const onMouseDown = (e: React.MouseEvent<HTMLTableDataCellElement>) => {
    e.stopPropagation();
    handleMouseDown(point, selected);
  };

  const onMouseEnter = (e: React.MouseEvent<HTMLTableDataCellElement>) => {
    e.stopPropagation();
    handleMouseEnter(point);
  };

  const onMouseUp = (e: React.MouseEvent<HTMLTableDataCellElement>) => {
    e.stopPropagation();
    handleMouseUp(point);
  };

  return (
    <td
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseUp={onMouseUp}
      data-selected={selected}
      className={styles.cell}
    >
      {label}
    </td>
  );
}

export default Cell;

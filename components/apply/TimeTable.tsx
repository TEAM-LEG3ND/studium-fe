import { useRef, useState } from "react";
import Cell from "./Cell";
// import styles from "@/styles/components/TimeTable.module.sass";

const DayOfTheWeek: Record<number, string> = {
  0: "Mon",
  1: "Tue",
  2: "Wed",
  3: "Thu",
  4: "Fri",
  5: "Sat",
  6: "Sun",
};

const convertFloatToTime = (fl: number) => {
  const minutePerHour = 60;
  const integer = Math.trunc(fl);
  const decimalPoint = fl - integer;

  const hour = `${integer}`.padStart(2, "0");
  const minute = `${Math.trunc(minutePerHour * decimalPoint)}`.padStart(2, "0");

  return `${hour}:${minute}`;
};

type Props = {
  onChange: (data: string[]) => void;
  // eslint-disable-next-line react/require-default-props
  options?: {
    startTime: number;
    endTime: number;
    step: number;
  };
};

function TimeTable({
  onChange,
  options = { startTime: 0, endTime: 24, step: 1 },
}: Props) {
  const { startTime, endTime, step } = options;
  const [dragging, setDragging] = useState<boolean>(false);
  const [dragStartPoint, setDragStartPoint] = useState<[number, number]>([
    0, 0,
  ]);
  const [mode, setMode] = useState<boolean>(false);
  const [table, setTable] = useState<boolean[][]>(
    Array.from(Array((endTime - startTime) / step), () => Array(7).fill(false)),
  );
  const exTable = useRef<readonly boolean[][]>([...table]);

  const handleMouseDown = (point: [number, number], selected: boolean) => {
    setDragging(true);
    setDragStartPoint(point);
    setMode(!selected);
    const newTable = structuredClone(table);
    newTable[point[0]][point[1]] = !selected;
    setTable(newTable);
  };

  const handleMouseEnter = (point: [number, number]) => {
    if (dragging) {
      const newTable = structuredClone(table);
      const [minRow, maxRow] = [dragStartPoint[0], point[0]].sort(
        (a, b) => a - b,
      );
      const [minCol, maxCol] = [dragStartPoint[1], point[1]].sort(
        (a, b) => a - b,
      );
      for (let i = 0; i < newTable.length; i += 1) {
        for (let j = 0; j < newTable[i].length; j += 1) {
          if (i <= maxRow && i >= minRow && j <= maxCol && j >= minCol) {
            newTable[i][j] = mode;
          } else {
            newTable[i][j] = exTable.current[i][j];
          }
        }
      }
      setTable(newTable);
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
    exTable.current = [...table];
    const selected = [];
    for (let i = 0; i < table.length; i += 1) {
      for (let j = 0; j < table[i].length; j += 1) {
        if (table[i][j] === true) {
          selected.push(
            `${DayOfTheWeek[j]}-${convertFloatToTime(startTime + step * i)}`,
          );
        }
      }
    }
    onChange(selected);
  };

  return (
    <table>
      <thead>
        <tr>
          <th scope="col">월요일</th>
          <th scope="col">화요일</th>
          <th scope="col">수요일</th>
          <th scope="col">목요일</th>
          <th scope="col">금요일</th>
          <th scope="col">토요일</th>
          <th scope="col">일요일</th>
        </tr>
      </thead>
      <tbody>
        {table.map((tr, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <tr key={i}>
            {tr.map((td, j) => (
              <Cell
                // eslint-disable-next-line react/no-array-index-key
                key={j}
                label={convertFloatToTime(startTime + step * i)}
                selected={td}
                point={[i, j]}
                handleMouseDown={handleMouseDown}
                handleMouseEnter={handleMouseEnter}
                handleMouseUp={handleMouseUp}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TimeTable;

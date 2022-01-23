import styles from "./index.module.scss";

export default function Matrix({ className, matrix, onChange }) {
  function handleChange({ currentTarget: { value } }, i, j) {
    if (isNaN(value)) return;

    value = parseFloat(value);
    onChange(parseInt(value, 10), i, j);
  }

  return (
    <div className={`${styles.Matrix} ${className}`}>
      {matrix.map((row, i) => (
        <div className={styles.row} key={i.toString()}>
          {row.map((item, j) => (
            <div className={styles.item} key={j.toString()}>
              <input
                className={styles.input}
                type="text"
                value={item}
                onChange={(event) => handleChange(event, i, j)}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

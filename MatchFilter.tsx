import styles from './MatchFilter.module.scss';

export function MatchFilter(props: {
  onFilterClick: (val: string) => void;
  options: string[];
}) {
  return (
    <div className={styles.matchFilter}>
      {props.options?.map((option, index) => (
        <>
          <input
            type="radio"
            id={option}
            name="filterOptions"
            value={option}
            defaultChecked={index === 0}
            onChange={(e) => props.onFilterClick(e.target.value)}
          />
          <label htmlFor={option}>
            <div>{option}</div>
          </label>
        </>
      ))}
    </div>
  );
}

export default MatchFilter;

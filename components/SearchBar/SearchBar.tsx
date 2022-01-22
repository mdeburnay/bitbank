import styles from "./SearchBar.module.css";

const SearchBar = ({ props }: any) => {
  return (
    <div className={styles.search_bar}>
      <input
        placeholder="Search Crypto..."
        className={styles.search_input}
        {...props}
      />
    </div>
  );
};

export { SearchBar };

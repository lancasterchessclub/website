import React, { useEffect, useState } from "react";
import Pagination from "react-responsive-pagination";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import theme from "./theme";
import Article from "./newsArticles/ArticleMD";
import "./News.css";

const useStyles = makeStyles({
  container: {
    width: "70%",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
  },
  title: {
    paddingTop: "20px",
    textAlign: "center",
    fontSize: theme.typography.title.fontSize,
  },
  pagination: {
    display: "inline-flex",
    textAlign: "center",
    alignContent: "center",
    outline: "filled",
    listStyle: "none",
    nextLabel: "",
  },
});

const files = [
  "./19.md",
  "./18.md",
  "./18.md",
  "./17.md",
  "./16.md",
  "./15.md",
  "./14.md",
  "./13.md",
  "./12.md",
  "./11.md",
  "./10.md",
  "./9.md",
  "./8.md",
  "./7.md",
  "./6.md",
  "./5.md",
  "./4.md",
  "./3.md",
  "./2.md",
  "./1.md",
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems.map((item) => (
        <Article path={item} key={item} />
      ))}
    </>
  );
}

function PaginatedItems({ itemsPerPage, className }) {
  const classes = useStyles();
  const [currentItems, setCurrentItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    const endOffset = currentPage + itemsPerPage;
    setCurrentItems(files.slice(currentPage, endOffset));
    setPageCount(Math.ceil((files.length - 1) / itemsPerPage));
  }, [currentPage, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event * itemsPerPage) % files.length;
    setCurrentPage(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <Pagination
        className={classes.pagination}
        previousLabel="<"
        nextLabel=">"
        current={currentPage}
        total={pageCount}
        pageItemClassName={"pagination__link"}
        pageLinkClassName={"pagination__link"}
        onPageChange={handlePageClick}
        activeItemClassName={"pagination__link--active"}
        disabledItemClassName={"pagination__link--disabled"}
      />
    </>
  );
}

export default function News() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.title} variant="h1">
        News
      </Typography>
      <PaginatedItems itemsPerPage={1} />
    </div>
  );
}

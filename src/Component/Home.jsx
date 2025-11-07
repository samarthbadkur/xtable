import React, { useState } from "react";

const initialData = [
  { date: "2022-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-01", views: 100, article: "Article 1" },
  { date: "2023-09-02", views: 150, article: "Article 2" },
  { date: "2023-09-02", views: 120, article: "Article 3" },
  { date: "2020-09-03", views: 200, article: "Article 4" }
];

function Home() {
  const [tableData, setTableData] = useState(initialData);

  // Sort by Date: Descending (latest first), tie-breaker on views (higher first).
  const handleSortByDate = () => {
    const sorted = [...tableData].sort((a, b) => {
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;
      // Dates are equal; sort by views descending
      return b.views - a.views;
    });
    setTableData(sorted);
  };

  // Sort by Views: Descending, tie-breaker on Date (latest first).
  const handleSortByViews = () => {
    const sorted = [...tableData].sort((a, b) => {
      if (a.views !== b.views) {
        return b.views - a.views;
      }
      // Views are equal; sort by date descending
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;
      return 0;
    });
    setTableData(sorted);
  };

  return (
    <div style={{ background: "#232b35", padding: "30px", minHeight: "100vh" }}>
      <h1 style={{ color: "#000" }}>Date and Views Table</h1>
      <div style={{ margin: "10px 0" }}>
        <button onClick={handleSortByDate}>Sort by Date</button>
        <button onClick={handleSortByViews} style={{ marginLeft: "8px" }}>Sort by Views</button>
      </div>
      <table style={{ fontSize: "18px", background: "#fff", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "4px 12px" }}>Date</th>
            <th style={{ textAlign: "left", padding: "4px 12px" }}>Views</th>
            <th style={{ textAlign: "left", padding: "4px 12px" }}>Article</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, idx) => (
            <tr key={idx}>
              <td style={{ padding: "4px 12px" }}>{row.date}</td>
              <td style={{ padding: "4px 12px" }}>{row.views}</td>
              <td style={{ padding: "4px 12px" }}>{row.article}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;

const target = document.body;
const insert = document.getElementById("insert");
target.addEventListener("keydown", (e) => {
      insert.innerHTML = `
      <table>
          <tr>
              <th>Key Pressed</th>
              <th>Key Code</th>
          </tr>
          <tr>
              <td>${e.key === " " ? "Space" : e.key}</td>
              <td>${e.code}</td>
          </tr>
      </table>
    `
});
